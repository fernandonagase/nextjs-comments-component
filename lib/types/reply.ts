import Comment from './comment'

export default interface Reply extends Comment {
    replyingTo: string
}
