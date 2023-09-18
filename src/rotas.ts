// rotas.js
import { Elysia } from 'elysia';

const app = new Elysia() as any;

app.get('/visitou-ebd', () => 'visitou-ebd =)');
app.get('/participou-evento', () => 'participou-evento');

export default app;
