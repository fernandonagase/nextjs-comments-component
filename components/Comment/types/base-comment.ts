interface BaseComment {
    id: number
    content: string
    createdAt: string
    score: number
    user: {
        avatarUrl: string
        username: string
    }
}

export default BaseComment
