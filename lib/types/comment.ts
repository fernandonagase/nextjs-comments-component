import User from './user'

export default interface Comment {
    id: string
    content: string
    createdAt: number
    score: number
    user: User
}
