'use strict'

import { build } from '../helper'

const app = build()

test('default root route', async () => {
  const res = await app.inject({
    url: '/'
  })

  expect(JSON.parse(res.payload)).toEqual({ root: true })
})

// inject callback style:
//
// test('default root route', (t) => {
//   t.plan(2)
//   const app = await build(t)
//
//   app.inject({
//     url: '/'
//   }, (err, res) => {
//     t.error(err)
//     t.same(JSON.parse(res.payload), { root: true })
//   })
// })
