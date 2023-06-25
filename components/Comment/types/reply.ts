import BaseComment from './base-comment'

interface Reply extends BaseComment {
    replyingTo: string
}

export default Reply
