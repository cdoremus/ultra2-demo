import { Link, Outlet } from "react-router-dom";
import { tw } from "twind";

export function DefaultLayout() {
  return (
    <div>
      <header className={tw`flex border-b-2 border-black`}>
        <nav  className={tw`flex gap-2 basis-1/5 underline`}>
          <Link to="/">Home</Link>
        </nav>
        <div className={tw`inline w-full basis-4/5`}>
          <h1 className={tw`w-full text-5xl font-extrabold text-center pb-2`}>
                  Ultra Demo App
          </h1>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
