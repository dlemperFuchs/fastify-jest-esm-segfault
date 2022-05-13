import Fastify from "fastify";
import fp from "fastify-plugin";
import App from "../app.js";
import SegfaultHandler from 'segfault-handler';

SegfaultHandler.registerHandler('crash.log');

export function build() {
    const app = Fastify();

    beforeAll(async () => {
      app.register(fp(App), {
        ignoreTrailingSlash: true,
        trustProxy: true,
      });

      await app.ready();
    });

    afterAll(() => app.close());

    return app;
  }

