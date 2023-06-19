import AddComment from '../AddComment'
import CommentType from '../Comment/types/comment'
import CommentThread from '../CommentThread'
import User from './types/user'
import UserContext from './user-context'
import styles from './styles/comment-component.module.scss'

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
                        <CommentThread
                            comment={comment}
                            className={styles.commentComponent__thread}
                            key={comment.id}
                        />
                    ))}
                </div>
                <AddComment currentUser={props.currentUser} />
            </div>
        </UserContext.Provider>
    )
}
