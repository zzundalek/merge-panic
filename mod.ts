import { Application, Router } from 'https://deno.land/x/oak@v11.1.0/mod.ts';
import render from 'https://esm.sh/preact-render-to-string@5.2.6';

import { Greet } from './greet.tsx';

const router = new Router();
router.get('/', (ctx) => {
	ctx.response.body = `<!DOCTYPE html>
    <html>
      <head><title>Hello world!</title><head>
      <body>
        ${render(Greet('stranger'))}
      </body>
    </html>
  `;
});

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

app.listen({ port: 80 });
