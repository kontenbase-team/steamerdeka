import { Link as RemixLink } from "@remix-run/react";
import type { Games } from "~/types/game";

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
              <div className="p-2  flex gap-2 justify-between">
                <div className="w-[500px]">
                  <h4 className="text-2xl font-bold">{game.name}</h4>
                  <p>{game.description}</p>
                  <ul className="flex gap-1">
                    {game.platforms.map((platform) => {
                      return <li key={platform.id}>{platform.value}</li>;
                    })}
                  </ul>
                </div>
                <div>
                  <span>{game.releaseDate}</span>
                </div>
                <div>
                  <span>{game.price}</span>
                </div>
              </div>
            </div>
          </RemixLink>
        );
      })}
    </div>
  );
}
