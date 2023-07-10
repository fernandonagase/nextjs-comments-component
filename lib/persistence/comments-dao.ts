import RootComment from '../types/root-comment'
import BaseComment from '../types/comment'
import * as dao from './dao'

function getComments(): RootComment[] {
    return dao.get('comments') ?? []
}

function addComment(comment: RootComment) {
    cacheComments([...getComments(), comment])
}

function updateComment(updatedComment: BaseComment) {
    cacheComments(
        getComments().map((comment) => {
            if (comment.id === updatedComment.id) {
                return { ...comment, ...updatedComment }
            }
            return {
                ...comment,
                replies: comment.replies.map((reply) =>
                    reply.id === updatedComment.id
                        ? { ...reply, ...updatedComment }
                        : reply
                ),
            }
        })
    )
}

function deleteComment(id: string) {
    cacheComments(
        getComments()
            .filter((comment) => comment.id !== id)
            .map((comment) => {
                return {
                    ...comment,
                    replies: comment.replies.filter((reply) => reply.id !== id),
                }
            })
    )
}

function cacheComments(comments: RootComment[]) {
    dao.set<typeof comments>('comments', comments)
}

export { getComments, addComment, updateComment, deleteComment, cacheComments }
