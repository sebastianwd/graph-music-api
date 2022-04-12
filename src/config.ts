export const config = {
  PORT: process.env.PORT || 4000,
  SESSION_SECRET: process.env.SESSION_SECRET,
  NODE_ENV: process.env.NODE_ENV || 'development',
  LASTFM_API_KEY: process.env.LASTFM_API_KEY,
  YOUTUBE_API_KEY: process.env.YOUTUBE_API_KEY,
  AUDIODB_API_KEY: process.env.AUDIODB_API_KEY,
  REDIS_URL: process.env.REDIS_URL as string,
  REDIS_PWD: process.env.REDIS_PWD,
  GRAPHQL_PATH: process.env.GRAPHQL_PATH || '/graphql',
  APPLICATION_NAME: process.env.APPLICATION_NAME,
} as const
