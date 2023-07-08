export default function downvote(
    commentId: string,
    userId: string
): DownvoteAction {
    return {
        type: 'downvote',
        commentId,
        userId,
    }
}

export type DownvoteAction = {
    type: 'downvote'
    commentId: string
    userId: string
}
