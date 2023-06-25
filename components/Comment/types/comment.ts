import BaseComment from './base-comment'
import Reply from './reply'

interface Comment extends BaseComment {
    replies: Reply[]
}

export default Comment
