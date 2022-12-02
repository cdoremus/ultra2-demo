import { Link, NavLink, Outlet } from "react-router-dom";
import { tw } from "../twind/twind.ts";

export default function Layout() {
  const navStyle = ({ isActive }: {isActive: boolean}) => ({
    fontWeight: isActive ? 'bold' : 'normal',
    color: isActive ? 'gray' : 'black',
  });
  return (
    <div>
      <header className={tw(`flex border-t-2 border-b-2 border-black`)}>
        <nav  className={tw(`flex flex-col underline text-base`)}>
          <NavLink to="/" style={navStyle}>Home</NavLink> {" "}
          <NavLink to="/about" style={navStyle}>About</NavLink>
        </nav>
        <div className={tw(`inline w-full`)}>
          <h1 className={tw(`w-full text-5xl font-extrabold text-center pb-2`)}>
                  Ultra Demo App
          </h1>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className={tw(`border-t-2 border-b-2 border-black`)}>
        <div className={tw(`p-2`)}><a className={tw(`font-mono text-2xl underline`)} href="https://ultrajs.dev">Built with Ultra 💎</a></div>
      </footer>
    </div>
  );
}
