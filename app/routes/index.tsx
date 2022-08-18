import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { axiosInstance } from "~/libs/axios";

export const loader = async () => {
  const response = await axiosInstance.get("/games?$lookup=*");
  const data = await response.data;

  return json(data);
};

export default function Index() {
  const data = useLoaderData();

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Steamerdeka</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
