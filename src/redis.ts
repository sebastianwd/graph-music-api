import Redis from 'ioredis'
import { config } from './config'

export const redis = new Redis(config.REDIS_URL, { password: config.REDIS_PWD })
