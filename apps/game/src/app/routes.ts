import {
  type RouteConfig,
  route,
  index,
  prefix,
} from "@react-router/dev/routes";

export default [
  index("./home.tsx"),
  route("about", "./about.tsx"),

  ...prefix("lobby", [route(":id", "./lobby/id.tsx")]),

  ...prefix("game", [
    route(":id", "./game/id.tsx"),
    route(":id/results", "./game/results.tsx"),
  ]),

  route("*?", "./not-found.tsx"),
] satisfies RouteConfig;
