import AddComment from '../AddComment'
import Modal from '../Modal'
import CommentType from '../Comment/types/comment'
import CommentThread from '../CommentThread'
import User from './types/user'
import UserContext from './user-context'

type CommentComponentProps = {
    comments: CommentType[]
    currentUser: User
}

export default function CommentComponent(props: CommentComponentProps) {
    return (
        <UserContext.Provider value={props.currentUser}>
            <div>
                <div>
                    {props.comments.map((comment) => (
                        <CommentThread comment={comment} key={comment.id} />
                    ))}
                </div>
                <AddComment currentUser={props.currentUser} />
                <Modal />
            </div>
        </UserContext.Provider>
    )
}
