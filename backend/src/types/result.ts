export interface Error {
    status: 'error'
    message: string
}

export interface Success<T> {
    status: 'success'
    data: T
}


export type Result<T> = Success<T> | Error