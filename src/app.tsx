import { Suspense, lazy } from "react";
import useAsset from "ultra/hooks/use-asset.js";
import useServerContext from "ultra/hooks/use-server-context.js";
import { Route, Routes } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
// Twind Provider
import { TwindProvider } from "./twind/TwindProvider.tsx";
// Twind
import  { tw } from "twind";

import { DefaultLayout } from "./layouts/DefaultLayout.tsx";
import UserDetailsPage from "./pages/UserDetailsPage.tsx";

const HomePage = lazy(() => import("./pages/Home.tsx"));
const AboutPage = lazy(() => import("./pages/About.tsx"));
// const UserDetailsPage = lazy(() => import("./pages/UserDetailsPage.tsx"));

function RouteNotFound() {
  useServerContext((context) => {
    context.status(404);
  });
  return <div>Not found</div>;
}

export default function App() {
  return (
    <TwindProvider>
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <title>Ultra</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="shortcut icon" href={useAsset("/favicon.ico")} />
          <link rel="stylesheet" href={useAsset("/style.css")} />
        </head>
        <body className={tw`w-full p-5 bg-lightgray-500`}>
          {/* <Suspense fallback={<div>Page is Loading...</div>}> */}
            <Routes>
              <Route path="/" element={<DefaultLayout />}>
                <Route index element={<HomePage />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="*" element={<RouteNotFound />} />
                <Route path="Home" element={<HomePage />} />
                <Route path="user_details/:userId" element={<UserDetailsPage />} />
              </Route>
            </Routes>
          {/* </Suspense> */}
          <ReactQueryDevtools />
        </body>
      </html>
    </TwindProvider>
  );
}
