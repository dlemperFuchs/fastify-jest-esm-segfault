'use strict'

import { build } from '../helper'

const app = build()

test('example is loaded', async () => {
  const res = await app.inject({
    url: '/example'
  })

  expect(res.payload).toEqual('this is an example')
})

// inject callback style:
//
// test('example is loaded', (t) => {
//   t.plan(2)
//   const app = await build(t)
//
//   app.inject({
//     url: '/example'
//   }, (err, res) => {
//     t.error(err)
//     t.equal(res.payload, 'this is an example')
//   })
// })
