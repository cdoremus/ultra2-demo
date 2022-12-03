# Demo app for the Deno/React framework Ultra

This repo holds code for an app that shows the capabilities of [**Ultra**](https://ultrajs.dev) version 2. **Ultra** is a framework that allows a [React](https://reactjs.org) app to run in the [Deno](https://deno.land) JavaScript runtime.

This app was initiated using the **Ultra** create script. It runs from this command line:
```sh
deno run -A -r https://deno.land/x/ultra/create.ts
```
Create script options Twind(Tailwind), React Router and React Query were selected. The project queries the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/) via React Query to obtain a list of users.

The 'home' page of the app shows the users list, while clicking on a user produces a page with a user's details. An About page is also included in the app to demonstrate routing with React Router.

This repo is used as an example app for a blog post on [Craig's Deno Diary](https://deno-blog.com) called __Building Full Stack React Apps with Ultra__.

To run this app locally, you need to have [Deno installed](https://deno.land/manual@v1.28.3/getting_started/installation). Then just clone this repo and run the following command line in the repo's root folder:
```sh
deno task dev
```
