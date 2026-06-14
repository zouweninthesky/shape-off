import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";
import { Fallback } from "../components/layout/Fallback/Fallback";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="/src/assets/style.css" rel="stylesheet" />
        <Meta />
        <Links />
      </head>

      <body>
        {children}

        <ScrollRestoration />

        <Scripts />
      </body>
    </html>
  );
}

export function HydrateFallback() {
  return <Fallback />;
}

export default function Root() {
  return <Outlet />;
}
