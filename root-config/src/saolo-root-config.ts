import { registerApplication, start } from "single-spa";

registerApplication({
  name: '@saolo/footer',
  app: () => System.import('@saolo/footer'),
  activeWhen: ['/']
})
registerApplication({
  name: '@saolo/article',
  app: () => System.import('@saolo/article'),
  activeWhen: ['/']
})
registerApplication({
  name: "@saolo/header",
  app: () => System.import("@saolo/header"),
  activeWhen: ["/"]
});
registerApplication({
  name: "@saolo/counter",
  app: () => System.import("@saolo/counter"),
  activeWhen: ["/"],
});

start({
  urlRerouteOnly: true,
});
