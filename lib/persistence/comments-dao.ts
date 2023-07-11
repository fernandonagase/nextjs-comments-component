import RootComment from '../types/root-comment'
import BaseComment from '../types/comment'
import * as dao from './dao'
import * as commentModel from '@/lib/comments'
import Reply from '../types/reply'

const COMMENT_SEQUENCE = 'commentSequence'
try {
    dao.getSequence(COMMENT_SEQUENCE)
} catch (e) {
    dao.createSequence(COMMENT_SEQUENCE, 5)
}

function getComments(): RootComment[] {
    return dao.get('comments') ?? []
}

function generateId(comment: BaseComment) {
    const id = dao.getSequence(COMMENT_SEQUENCE)
    return { ...comment, id }
}

function addComment(comment: RootComment) {
    const commentWithId = generateId(comment) as RootComment
    cacheComments([...getComments(), commentWithId])
    return commentWithId
}

function addReply(reply: Reply, commentId: string) {
    const commentWithId = generateId(reply) as Reply
    cacheComments(
        getComments().map((comment) => {
            return comment.id === commentId ||
                comment.replies.some((reply) => reply.id === commentId)
                ? commentModel.addReply(commentWithId, comment)
                : comment
        })
    )
    return commentWithId
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

export {
    getComments,
    addComment,
    addReply,
    updateComment,
    deleteComment,
    cacheComments,
}
