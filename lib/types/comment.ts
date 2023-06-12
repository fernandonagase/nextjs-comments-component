import User from './user'

interface CommentBase {
    id: number
    content: string
    createdAt: string
    score: number
    user: User
}

interface Reply extends CommentBase {
    replyingTo: string
}

export default interface Comment extends CommentBase {
    replies: Reply[]
}
