import { NavLink, Outlet } from "react-router-dom";
import { TwindProvider } from "../twind/TwindProvider.tsx";
import { tw } from "twind";

export default function Layout() {
  // @ts-ignore isActive typing
  const navStyle = ({ isActive }) => ({
    fontWeight: isActive ? 'bold' : 'normal',
  });
  return (
    <div>
      <header className={tw`flex border-b-2 border-black`}>
        <nav  className={tw`flex flex-col underline`}>
          <NavLink to="/" style={navStyle}>Home</NavLink> {" "}
          <NavLink to="/about" style={navStyle}>About</NavLink>
        </nav>
        <div className={tw`inline w-full`}>
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
