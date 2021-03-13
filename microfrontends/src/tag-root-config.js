import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  //activeWhen: ["/"],
  activeWhen: (location) => location.pathname === "/",
});

registerApplication({
  name: "@tag/react-contracts",
  app: () => System.import("@tag/react-contracts"),
  activeWhen: (location) => location.pathname === "/react-contracts",
});

registerApplication({
  name: "@tag/react-multiples",
  app: () => System.import("@tag/react-multiples"),
  activeWhen: ["/react-multiples"],
});

registerApplication({
  name: "@tag/react-parcel",
  app: () => System.import("@tag/react-parcel"),
  activeWhen: (location) => location.pathname === "/react-parcel",
});

start({
  urlRerouteOnly: true,
});
