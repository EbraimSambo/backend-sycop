

export type UserCreateProps ={
    name: string
    email: string
    password: string
}

export type UserCreateResult ={
    id: number
    uuid: string
    name: string
    email: string
    password: string
    createdAt: Date | string
}