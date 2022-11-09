import { Link, Outlet } from "react-router-dom";
import { tw } from "twind";

export function DefaultLayout() {
  return (
    <div>
      <header className={tw(`flex pb-4`)}>
      <nav style={{ display: "flex", gap: "8px" }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/404">404</Link>
      </nav>
      <h1 className={tw(`text-5xl font-extrabold pl-40 inline`)}>
              Ultra Demo App
      </h1>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
