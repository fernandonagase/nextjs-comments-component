export default function upvote(
    commentId: string,
    userId: string
): UpvoteAction {
    return {
        type: 'upvote',
        commentId,
        userId,
    }
}

export type UpvoteAction = {
    type: 'upvote'
    commentId: string
    userId: string
}
