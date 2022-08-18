import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { GamesList } from "~/components/games";
import { axiosInstance } from "~/libs/axios";
import type { Games } from "~/types/game";

export const loader = async () => {
  const response = await axiosInstance.get("/games?$lookup=*");
  const games: Games = await response.data;

  return json(games);
};

export default function IndexRoute() {
  const games = useLoaderData<Games>();

  return (
    <div>
      <GamesList games={games} />
    </div>
  );
}
