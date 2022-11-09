import { Suspense, lazy } from "react";
import useAsset from "ultra/hooks/use-asset.js";
import useServerContext from "ultra/hooks/use-server-context.js";
import { Route, Routes } from "react-router-dom";
// Twind
import { TwindProvider } from "./twind/TwindProvider.tsx";

import { DefaultLayout } from "./layouts/DefaultLayout.tsx";

const HomePage = lazy(() => import("./pages/Home.tsx"));
const AboutPage = lazy(() => import("./pages/About.tsx"));

function RouteNotFound() {
  useServerContext((context) => {
    context.status(404);
  });
  return <div>Not found</div>;
}

export default function App() {
  console.log("Hello world!");
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
        <body>
          <Suspense fallback={<div>Page is Loading...</div>}>
            <Routes>
              <Route path="/" element={<DefaultLayout />}>
                <Route index element={<HomePage />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="*" element={<RouteNotFound />} />
              </Route>
            </Routes>
          </Suspense>

        </body>
      </html>
    </TwindProvider>
  );
}
