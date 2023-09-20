// rotas.js
import { Elysia, t } from 'elysia';

const app = new Elysia();

app.post('/', () => 'pong');
app.post(
  '/criar-usuario',
  ({ body }) => {
    console.log('Criar usuario:::: ', body);
    return body;
  },
  {
    body: t.Object({
      usuario: t.String(),
      password: t.String(),
    }),
  }
);

app.post(
  '/visitou-ebd',
  ({ body }) => {
    console.log('Visitou-ebd:::: ', body);

    console.log(`${body.mensagemBoasVindas}${body.nomeEbd}`);
    return body;
  },
  {
    body: t.Object({
      nomeEbd: t.String(),
      mensagemBoasVindas: t.String(),
    }),
  }
);

app.post(
  '/cadastrou-evento',
  ({ body }) => {
    console.log('cadastrou-evento:::: ', body);
    return body;
  },
  {
    body: t.Object({
      nomeEvento: t.String(),
      dataEvento: t.String(),
    }),
  }
);

export default app;
