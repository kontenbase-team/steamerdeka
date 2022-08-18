import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { axiosInstance } from "~/libs/axios";
import type { Game } from "~/types/game";

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
          <h1 className="text-4xl">{game.name}</h1>
          <h2 className="text-3xl">{game.price}</h2>
          <p>{game.description}</p>
          <p>
            <span className="space-x-1">
              {game.platforms.map((platform) => {
                return <span key={platform.id}>{platform.value}</span>;
              })}
            </span>
          </p>
        </div>

        <div>
          <p>Tanggal Rilis: {game.releaseDate}</p>
          <p>
            Pengembang:{" "}
            <span className="space-x-1">
              {game.developers.map((developer) => {
                return <span key={developer._id}>{developer.name}</span>;
              })}
            </span>
          </p>
          <p>
            Penerbit:{" "}
            <span className="space-x-1">
              {game.publishers.map((publisher) => {
                return <span key={publisher._id}>{publisher.name}</span>;
              })}
            </span>
          </p>
        </div>

        <div>
          <p>
            Genre:{" "}
            <span className="space-x-1">
              {game.genres.map((genre) => {
                return <span key={genre._id}>{genre.name}</span>;
              })}
            </span>
          </p>
          <p>
            Label:{" "}
            <span className="space-x-1">
              {game.tags.map((tag) => {
                return <span key={tag._id}>{tag.name}</span>;
              })}
            </span>
          </p>
        </div>

        {/* <pre>{JSON.stringify(game, null, 2)}</pre> */}
      </div>
    </div>
  );
}
