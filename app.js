'use strict'

import path from 'path'
import autoload from 'fastify-autoload'

export default async function (fastify, opts) {
  // Place here your custom code!

  // Do not touch the following lines

  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  fastify.register(autoload, {
    dir: path.join(process.cwd(), 'plugins'),
    options: Object.assign({}, opts)
  })

  // This loads all plugins defined in routes
  // define your routes in one of these
  fastify.register(autoload, {
    dir: path.join(process.cwd(), 'routes'),
    options: Object.assign({}, opts)
  })
}
