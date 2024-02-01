import { setupWorker } from 'msw/browser'
import authHandlers from './handler.auth'

const handlers = [...authHandlers]

export const worker = setupWorker(...handlers)
