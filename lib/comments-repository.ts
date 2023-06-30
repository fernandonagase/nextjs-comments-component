import * as commentsDao from './persistence/comments-dao'
import ApiComment from '@/app/api/lib/types/comment'
import mapUser from './util/map-user'
import RootComment from './types/root-comment'

async function fetchData(): Promise<RootComment[]> {
    const data = await fetch('/api/comments')
    const json: ApiComment[] = await data.json()
    return json.map(adaptComment)
}

function adaptComment(comment: ApiComment) {
    return {
        ...comment,
        id: `${comment.id}`,
        user: mapUser(comment.user),
        replies: comment.replies.map((reply) => ({
            ...reply,
            id: `${reply.id}`,
            user: mapUser(reply.user),
        })),
    }
}

async function getComments() {
    let comments = commentsDao.getComments()

    if (comments.length > 0) {
        return comments
    }

    comments = await fetchData()
    commentsDao.cacheComments(comments)
    return comments
}

function addComment(comment: RootComment) {
    commentsDao.addComment(comment)
}

function updateComment(comment: RootComment) {
    commentsDao.updateComment(comment)
}

function deleteComment(id: string) {
    commentsDao.deleteComment(id)
}

export { getComments, addComment, updateComment, deleteComment }
