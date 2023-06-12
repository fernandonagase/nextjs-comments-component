import Comment from './types/comment'
import CommentsData from './types/comments-data'
import User from './types/user'

export async function getComments() {
    const data = await fetch('/api/comments')
    const json: CommentsData = await data.json()
    return json.comments.map(adaptComment)
}

function adaptComment(comment: Comment) {
    return {
        ...comment,
        user: mapUser(comment.user),
        replies: comment.replies.map((reply) => ({
            ...reply,
            user: mapUser(reply.user),
        })),
    }
}

function mapUser(userData: User) {
    return { username: userData.username, avatarUrl: userData.image.png }
}
