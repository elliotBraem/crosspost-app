/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from "./routes/__root";
import { Route as LayoutImport } from "./routes/_layout";
import { Route as LayoutIndexImport } from "./routes/_layout/index";
import { Route as LayoutProfileIndexImport } from "./routes/_layout/profile/index";
import { Route as LayoutDonateIndexImport } from "./routes/_layout/donate/index";
import { Route as LayoutProfileAccountIdImport } from "./routes/_layout/profile/$accountId";

// Create/Update Routes

const LayoutRoute = LayoutImport.update({
  id: "/_layout",
  getParentRoute: () => rootRoute,
} as any);

const LayoutIndexRoute = LayoutIndexImport.update({
  id: "/",
  path: "/",
  getParentRoute: () => LayoutRoute,
} as any);

const LayoutProfileIndexRoute = LayoutProfileIndexImport.update({
  id: "/profile/",
  path: "/profile/",
  getParentRoute: () => LayoutRoute,
} as any);

const LayoutDonateIndexRoute = LayoutDonateIndexImport.update({
  id: "/donate/",
  path: "/donate/",
  getParentRoute: () => LayoutRoute,
} as any);

const LayoutProfileAccountIdRoute = LayoutProfileAccountIdImport.update({
  id: "/profile/$accountId",
  path: "/profile/$accountId",
  getParentRoute: () => LayoutRoute,
} as any);

// Populate the FileRoutesByPath interface

declare module "@tanstack/react-router" {
  interface FileRoutesByPath {
    "/_layout": {
      id: "/_layout";
      path: "";
      fullPath: "";
      preLoaderRoute: typeof LayoutImport;
      parentRoute: typeof rootRoute;
    };
    "/_layout/": {
      id: "/_layout/";
      path: "/";
      fullPath: "/";
      preLoaderRoute: typeof LayoutIndexImport;
      parentRoute: typeof LayoutImport;
    };
    "/_layout/profile/$accountId": {
      id: "/_layout/profile/$accountId";
      path: "/profile/$accountId";
      fullPath: "/profile/$accountId";
      preLoaderRoute: typeof LayoutProfileAccountIdImport;
      parentRoute: typeof LayoutImport;
    };
    "/_layout/donate/": {
      id: "/_layout/donate/";
      path: "/donate";
      fullPath: "/donate";
      preLoaderRoute: typeof LayoutDonateIndexImport;
      parentRoute: typeof LayoutImport;
    };
    "/_layout/profile/": {
      id: "/_layout/profile/";
      path: "/profile";
      fullPath: "/profile";
      preLoaderRoute: typeof LayoutProfileIndexImport;
      parentRoute: typeof LayoutImport;
    };
  }
}

// Create and export the route tree

interface LayoutRouteChildren {
  LayoutIndexRoute: typeof LayoutIndexRoute;
  LayoutProfileAccountIdRoute: typeof LayoutProfileAccountIdRoute;
  LayoutDonateIndexRoute: typeof LayoutDonateIndexRoute;
  LayoutProfileIndexRoute: typeof LayoutProfileIndexRoute;
}

const LayoutRouteChildren: LayoutRouteChildren = {
  LayoutIndexRoute: LayoutIndexRoute,
  LayoutProfileAccountIdRoute: LayoutProfileAccountIdRoute,
  LayoutDonateIndexRoute: LayoutDonateIndexRoute,
  LayoutProfileIndexRoute: LayoutProfileIndexRoute,
};

const LayoutRouteWithChildren =
  LayoutRoute._addFileChildren(LayoutRouteChildren);

export interface FileRoutesByFullPath {
  "": typeof LayoutRouteWithChildren;
  "/": typeof LayoutIndexRoute;
  "/profile/$accountId": typeof LayoutProfileAccountIdRoute;
  "/donate": typeof LayoutDonateIndexRoute;
  "/profile": typeof LayoutProfileIndexRoute;
}

export interface FileRoutesByTo {
  "/": typeof LayoutIndexRoute;
  "/profile/$accountId": typeof LayoutProfileAccountIdRoute;
  "/donate": typeof LayoutDonateIndexRoute;
  "/profile": typeof LayoutProfileIndexRoute;
}

export interface FileRoutesById {
  __root__: typeof rootRoute;
  "/_layout": typeof LayoutRouteWithChildren;
  "/_layout/": typeof LayoutIndexRoute;
  "/_layout/profile/$accountId": typeof LayoutProfileAccountIdRoute;
  "/_layout/donate/": typeof LayoutDonateIndexRoute;
  "/_layout/profile/": typeof LayoutProfileIndexRoute;
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath;
  fullPaths: "" | "/" | "/profile/$accountId" | "/donate" | "/profile";
  fileRoutesByTo: FileRoutesByTo;
  to: "/" | "/profile/$accountId" | "/donate" | "/profile";
  id:
    | "__root__"
    | "/_layout"
    | "/_layout/"
    | "/_layout/profile/$accountId"
    | "/_layout/donate/"
    | "/_layout/profile/";
  fileRoutesById: FileRoutesById;
}

export interface RootRouteChildren {
  LayoutRoute: typeof LayoutRouteWithChildren;
}

const rootRouteChildren: RootRouteChildren = {
  LayoutRoute: LayoutRouteWithChildren,
};

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>();

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/_layout"
      ]
    },
    "/_layout": {
      "filePath": "_layout.tsx",
      "children": [
        "/_layout/",
        "/_layout/profile/$accountId",
        "/_layout/donate/",
        "/_layout/profile/"
      ]
    },
    "/_layout/": {
      "filePath": "_layout/index.tsx",
      "parent": "/_layout"
    },
    "/_layout/profile/$accountId": {
      "filePath": "_layout/profile/$accountId.tsx",
      "parent": "/_layout"
    },
    "/_layout/donate/": {
      "filePath": "_layout/donate/index.tsx",
      "parent": "/_layout"
    },
    "/_layout/profile/": {
      "filePath": "_layout/profile/index.tsx",
      "parent": "/_layout"
    }
  }
}
ROUTE_MANIFEST_END */
