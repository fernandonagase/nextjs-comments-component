import Comment from './comment'
import User from './user'

export default interface CommentsData {
    currentUser: User
    comments: Comment[]
}
