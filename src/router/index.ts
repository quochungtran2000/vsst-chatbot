import { Application, Router } from 'express';
import webhookConntroller from '../controller/webhook';

const router = Router();

export const initialRouter = (app: Application) => {
  router.get('/', (req,res) => {
    res.send('hello')
  })

  // webhook router

  router.get('/webhook', webhookConntroller.getWebhook);
  router.post('/webhook', webhookConntroller.postWebhook);

  return app.use('/', router)
}