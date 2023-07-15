import User from './user'

export default interface Comment {
    id: string
    content: string
    createdAt: number
    upvoted: string[]
    downvoted: string[]
    user: User
}
