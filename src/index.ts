import 'reflect-metadata'
import './variables'
import consola from 'consola'
import databaseLoader from '~/loaders/database.loader'
import expressLoader from '~/loaders/express.loader'
import gqlLoader from '~/loaders/gql.loader'
import { config } from '~/config'

const { APPLICATION_NAME, PORT } = config

const bootstrap = async () => {
  const database = await databaseLoader()

  const application = expressLoader()

  gqlLoader(application, database)

  application.listen(PORT, () => {
    consola.info(APPLICATION_NAME)

    consola.success(`Server running at port ${PORT}`)
  })
}

bootstrap()

process.on('uncaughtException', (stderr) => {
  console.error('uncaughtException')
  console.trace(stderr)
})

process.on('unhandledRejection', (stderr) => {
  console.error('unhandledRejection')
  console.trace(stderr)
})
