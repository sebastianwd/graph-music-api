import { config as envConfig } from 'dotenv'
import { expand } from 'dotenv-expand'

expand(envConfig({ path: '.env' }))
