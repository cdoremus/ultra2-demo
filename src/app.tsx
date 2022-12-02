import { lazy } from "react";
import useAsset from "ultra/hooks/use-asset.js";
import useServerContext from "ultra/hooks/use-server-context.js";
import { Route, Routes } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import  { tw } from "./twind/twind.ts";

import Layout from "./pages/Layout.tsx";
import AboutPage from "./pages/About.tsx";
import UserDetailsPage from "./pages/UserDetailsPage.tsx";

const HomePage = lazy(() => import("./pages/Home.tsx"));

function RouteNotFound() {
  useServerContext((context) => {
    context.status(404);
  });
  return <div>Not found</div>;
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Ultra 2 Demo</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href={useAsset("/favicon.ico")} />
        <link rel="stylesheet" href={useAsset("/style.css")} />
      </head>
      <body className={tw(`w-full p-5 bg-gray-300`)}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="user_details/:userId" element={<UserDetailsPage />} />
            <Route path="*" element={<RouteNotFound />} />
          </Route>
        </Routes>
        <ReactQueryDevtools />
      </body>
    </html>
  );
}
