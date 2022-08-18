import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Icon } from "~/components/icon";
import { axiosInstance } from "~/libs/axios";
import type { Game } from "~/types/game";
import { formatDate } from "~/utils/format-date";
import { formatPrice } from "~/utils/format-price";

export const loader: LoaderFunction = async ({ params }) => {
  const gameSlug = params.gameSlug;

  const response = await axiosInstance.get(`/games?$lookup=*&slug=${gameSlug}`);
  const game: Game = await response.data[0];

  return json(game);
};

export default function GameSlugRoute() {
  const game = useLoaderData<Game>();

  return (
    <div className="flex justify-center">
      <div className="max-w-[720px] space-y-8">
        <div className="space-y-4">
          <img
            className="w-full"
            src={game?.coverImageUrl[0]?.url}
            alt={game.name}
          />
          <h1 className="text-4xl font-bold">{game.name}</h1>
          <h2 className="text-3xl font-bold">
            {formatPrice(game.price, game.priceCurrency[0]?.value)}
          </h2>
          <p>{game.description}</p>
          <ul className="text-xl flex gap-2">
            {game.platforms.map((platform) => {
              return (
                <li key={platform.id}>
                  <Icon name={platform.value} />
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <p>
            Tanggal Rilis: <b>{formatDate(game.releaseDate)}</b>
          </p>
          <p>
            Pengembang:{" "}
            <span className="space-x-1">
              {game.developers.map((developer) => {
                return <b key={developer._id}>{developer.name}</b>;
              })}
            </span>
          </p>
          <p>
            Penerbit:{" "}
            <span className="space-x-1">
              {game.publishers.map((publisher) => {
                return <b key={publisher._id}>{publisher.name}</b>;
              })}
            </span>
          </p>
        </div>

        <div>
          <p>
            Genre:{" "}
            <span className="space-x-1">
              {game.genres.map((genre) => {
                return <b key={genre._id}>{genre.name}</b>;
              })}
            </span>
          </p>
          <p>
            Label:{" "}
            <span className="space-x-1">
              {game.tags.map((tag) => {
                return <b key={tag._id}>{tag.name}</b>;
              })}
            </span>
          </p>
        </div>

        {/* <pre>{JSON.stringify(game, null, 2)}</pre> */}
      </div>
    </div>
  );
}
