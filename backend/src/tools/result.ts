import { Error, Success } from '../types/result'

export function error(message: string): Error {
    return { status: 'error', message: message }
}

export function success<T>(data: T): Success<T> {
    return { status: 'success', data: data }
}