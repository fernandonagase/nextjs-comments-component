import * as commentsDao from './persistence/comments-dao'
import ApiComment from '@/app/api/lib/types/comment'
import mapUser from './util/map-user'
import BaseComment from './types/comment'
import RootComment from './types/root-comment'
import Reply from './types/reply'

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
        createdAt: Date.now() - comment.createdAt,
        replies: comment.replies.map((reply) => ({
            ...reply,
            id: `${reply.id}`,
            user: mapUser(reply.user),
            createdAt: Date.now() - reply.createdAt,
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
    return commentsDao.addComment(comment)
}

function addReply(reply: Reply, commentId: string) {
    return commentsDao.addReply(reply, commentId)
}

function updateComment(comment: BaseComment) {
    commentsDao.updateComment(comment)
}

function deleteComment(id: string) {
    commentsDao.deleteComment(id)
}

export { getComments, addComment, addReply, updateComment, deleteComment }
