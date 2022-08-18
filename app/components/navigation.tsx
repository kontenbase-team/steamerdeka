import { Link as RemixLink } from "@remix-run/react";

export function Navigation() {
  return (
    <nav className="flex p-2 gap-8">
      <RemixLink to="/">
        <h1 className="text-3xl text-red-500 font-bold underline">
          Steamerdeka
        </h1>
      </RemixLink>
      <ul className="flex items-center gap-4">
        <li>
          <RemixLink to="/">Home</RemixLink>
        </li>
        <li>
          <RemixLink to="/games">Games</RemixLink>
        </li>
        <li>
          <RemixLink to="/about">About</RemixLink>
        </li>
      </ul>
    </nav>
  );
}
