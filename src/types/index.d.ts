export {}

declare global {
  namespace NodeJS {
    export interface ProcessEnv {
      NODE_ENV: 'development' | 'production' | 'test'
      PORT: number
      SESSION_SECRET: string
      LASTFM_API_KEY: string
      YOUTUBE_API_KEY: string
      AUDIODB_API_KEY: string
      TYPEORM_URL: string
      REDIS_URL?: string
      REDIS_PWD: string
      AWS_ACCESS_KEY_ID: string
      AWS_SECRET_ACCESS_KEY: string
      AWS_BUCKET_NAME: string
      GRAPHQL_PATH: string
      APPLICATION_NAME: string
      HOSTNAME: string
    }
  }
}
