import { http, HttpResponse } from 'msw'
import { setupWorker } from 'msw/browser'

const handlers = [
  http.get('http://localhost:3500/security/public-key/', ({ params }) => {
    return HttpResponse.json({ id: params.id, title: 'Porcelain Mug', price: 9.99 })
  }),
]

export const worker = setupWorker(...handlers)
