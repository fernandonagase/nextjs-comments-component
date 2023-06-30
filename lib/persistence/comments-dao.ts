import RootComment from '../types/root-comment'
import * as dao from './dao'

function getComments(): RootComment[] {
    return dao.get('comments') ?? []
}

function addComment(comment: RootComment) {
    cacheComments([...getComments(), comment])
}

function updateComment(updatedComment: RootComment) {
    cacheComments(
        getComments().map((comment) =>
            comment.id === updatedComment.id
                ? { ...comment, ...updatedComment }
                : comment
        )
    )
}

function deleteComment(id: string) {
    cacheComments(getComments().filter((comment) => comment.id !== id))
}

function cacheComments(comments: RootComment[]) {
    dao.set<typeof comments>('comments', comments)
}

export { getComments, addComment, updateComment, deleteComment, cacheComments }
