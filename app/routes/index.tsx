import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { axiosInstance } from "~/libs/axios";
import { Games } from "~/types/game";

export const loader = async () => {
  const response = await axiosInstance.get("/games?$lookup=*");
  const data: Games = await response.data;

  return json(data);
};

export default function Index() {
  const games = useLoaderData<Games>();

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Steamerdeka</h1>
      {games.map((game) => {
        return (
          <div key={game._id} className="flex ">
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
        );
      })}
    </div>
  );
}
