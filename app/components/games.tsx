import { Link as RemixLink } from "@remix-run/react";
import type { Games } from "~/types/game";
import { formatDate } from "~/utils/format-date";
import { formatPrice } from "~/utils/format-price";
import { Icon } from "~/components/icon";

export function GamesList({ games }: { games: Games }) {
  return (
    <div className="max-w-[1100px] space-y-2">
      {games.map((game) => {
        return (
          <RemixLink
            key={game._id}
            to={`/games/${game.slug}`}
            className="block hover:bg-slate-200"
          >
            <div key={game._id} className="flex">
              <div>
                <img
                  className="w-[300px]"
                  src={game?.coverImageUrl[0]?.url}
                  alt={game.name}
                />
              </div>
              <div className="p-2 flex gap-2 justify-between w-full">
                <div className="max-w-[500px]">
                  <h4 className="text-2xl font-bold">{game.name}</h4>
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
                <div className="flex flex-col gap-2 items-end">
                  <b className="text-xl">
                    {formatPrice(game.price, game.priceCurrency[0]?.value)}
                  </b>
                  <b>
                    <time dateTime={game.releaseDate}>
                      {formatDate(game.releaseDate)}
                    </time>
                  </b>
                </div>
              </div>
            </div>
          </RemixLink>
        );
      })}
    </div>
  );
}
