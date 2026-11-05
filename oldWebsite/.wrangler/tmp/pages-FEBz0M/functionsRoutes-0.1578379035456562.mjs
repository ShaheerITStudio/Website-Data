import { onRequest as __api_status_js_onRequest } from "D:\\All-Projects-Works\\Github-Games-Works\\New-Website\\functions\\api\\status.js"

export const routes = [
    {
      routePath: "/api/status",
      mountPath: "/api",
      method: "",
      middlewares: [],
      modules: [__api_status_js_onRequest],
    },
  ]