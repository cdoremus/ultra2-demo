import { tw } from "../twind/twind.ts";

export default function AboutPage() {
  return (
    <div>
      <h2 className={tw(`text-3xl font-bold`)}>About this Site</h2>
      <div className={tw(`text-lg text-left pl-10 pr-10 pt-3 pb-2`)}>
        <p>
          This site was created to demonstrate how to use the Deno/React framework
          Ultra version 2 to create a web application that uses React Router,
          React Query and Tailwind. It was created for a blog post on
          Craig's Deno Diary called {" "}
          <a className={tw(`underline`)} href="https://deno-blog.com/Building_Fullstack_Apps_with_Ultra.2022.11.22">Building Fullstack Apps with Ultra</a>.
        </p>
        <p>The source code can be found <a className={tw(`underline`)} href="https://github.com/cdoremus/ultra2-demo">here</a>.</p>
      </div>
    </div>
  );
}
