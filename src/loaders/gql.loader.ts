import { ApolloServer } from 'apollo-server-express'
import { Express } from 'express'
import { GraphQLSchema, GraphQLError } from 'graphql'
import { buildSchema, BuildSchemaOptions } from 'type-graphql'
import depthLimit from 'graphql-depth-limit'
import consola from 'consola'
import _ from 'lodash'
import path from 'path'
import { Context } from '~/types'
import { config } from '~/config'
import { PrismaClient } from '@prisma/client'
import { resolvers } from '~/generated'
import UserResolver from '~/entities/user'
import { MeResolver } from '~/queries/me'

export const createSchema = (
  options?: Partial<BuildSchemaOptions>
): Promise<GraphQLSchema> => {
  const defined: BuildSchemaOptions = {
    resolvers: [...resolvers, UserResolver, MeResolver],
    emitSchemaFile: config.NODE_ENV === 'development',
    authChecker: ({ context }: { context: Context }) => {
      const { req } = context

      return !!req.session!.userId
    },
  }

  return buildSchema({
    ...defined,
    ...options,
  } as BuildSchemaOptions)
}

export default async (app: Express, database: PrismaClient): Promise<void> => {
  const schema = await createSchema()

  const apolloServer = new ApolloServer({
    schema,
    validationRules: [depthLimit(8)],
    context: ({ req }): Context => ({ req, prisma: database }),
    introspection: config.NODE_ENV === 'development',
    formatError: (error: GraphQLError) => {
      consola.error(error)

      return {
        ..._.pick(error, ['message', 'locations', 'path']),
        ..._.pick(error.originalError, ['code', 'state']),
      }
    },
  })

  await apolloServer.start()

  apolloServer.applyMiddleware({
    app,
    path: config.GRAPHQL_PATH,
    cors: false,
  })
}
