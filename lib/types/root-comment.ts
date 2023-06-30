import Comment from './comment'
import Reply from './reply'

export default interface RootComment extends Comment {
    replies: Reply[]
}
