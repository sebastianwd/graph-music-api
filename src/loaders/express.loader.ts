import express, { Express } from 'express'
import connectRedis from 'connect-redis'
import { RedisClient } from 'redis'
import cors from 'cors'
import session from 'express-session'
import { redis } from '~/redis'
import { config } from '~/config'

const allowedHosts = [
  'https://spectrefm.com',
  'https://studio.apollographql.com',
]

export default (): Express => {
  const app = express()

  const RedisStore = connectRedis(session)

  app.use(
    session({
      store: new RedisStore({
        client: redis as unknown as RedisClient,
      }),
      name: 'qid',
      secret: config.SESSION_SECRET as string,
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
        secure: config.NODE_ENV === 'production',
        maxAge: 1000 * 60 * 60 * 24 * 7 * 365, // 7 years
      },
    })
  )

  app.use(
    cors({
      credentials: true,
      origin:
        config.NODE_ENV === 'production'
          ? allowedHosts
          : [...allowedHosts, 'http://localhost:3000'],
    })
  )

  app.get('/', (_req, res) =>
    res.json({ application: config.APPLICATION_NAME })
  )

  return app
}
