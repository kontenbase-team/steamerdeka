import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const loader = async () => {
  return json({ ok: true });
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
