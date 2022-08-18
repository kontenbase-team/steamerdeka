import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { axiosInstance } from "~/libs/axios";
import type { Game } from "~/types/game";

export const loader: LoaderFunction = async ({ params }) => {
  const gameSlug = params.gameSlug;

  const response = await axiosInstance.get(`/games?slug=${gameSlug}`);
  const game: Game = await response.data[0];

  return json(game);
};

export default function GameSlugRoute() {
  const game = useLoaderData<Game>();

  return (
    <div>
      <h1>{game.name}</h1>
    </div>
  );
}
