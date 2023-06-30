import AddComment from '../AddComment'
import RootComment from '@/lib/types/root-comment'
import { useCurrentUser } from '@/lib/context/user-context'
import CommentThread from '../CommentThread'
import styles from './styles/comment-component.module.scss'

type CommentComponentProps = {
    comments: RootComment[]
}

export default function CommentComponent(props: CommentComponentProps) {
    const currentUser = useCurrentUser()

    function handleComment() {
        alert('Commented with success!')
    }

    return (
        <div>
            {props.comments.map((comment) => (
                <CommentThread
                    comment={comment}
                    className={styles.commentComponent__thread}
                    key={comment.id}
                />
            ))}
            <AddComment currentUser={currentUser} onSubmit={handleComment} />
        </div>
    )
}
