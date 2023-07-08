import User from './user'

interface BaseComment {
    id: number
    content: string
    createdAt: number
    upvoted: string[]
    downvoted: string[]
    user: User
}

interface Reply extends BaseComment {
    replyingTo: string
}

export default interface Comment extends BaseComment {
    replies: Reply[]
}
