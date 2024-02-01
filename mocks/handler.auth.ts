import { HttpResponse, http } from 'msw'

const handlers = [
  http.get('http://localhost:3500/security/public-key/', ({ params }) => {
    return HttpResponse.json({ id: params.id, title: 'Porcelain Mug', price: 9.99 })
  }),
]

export default handlers
