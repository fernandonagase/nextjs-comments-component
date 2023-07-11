import AddComment from '../AddComment'
import RootComment from '@/lib/types/root-comment'
import { useCurrentUser } from '@/lib/context/user-context'
import CommentThread from '../CommentThread'
import styles from './styles/comment-component.module.scss'
import { addComment } from '@/lib/comments-repository'
import { useCommentsDispatch } from '@/lib/context/comments/comments-context'
import addAction from '@/lib/context/comments/actions/add'

type CommentComponentProps = {
    comments: RootComment[]
}

export default function CommentComponent(props: CommentComponentProps) {
    const currentUser = useCurrentUser()
    const commentsDispatch = useCommentsDispatch()

    function handleComment(content: string) {
        const comment = {
            id: '',
            content,
            createdAt: Math.floor(Date.now()),
            upvoted: [],
            downvoted: [],
            user: currentUser,
            replies: [],
        }
        const commentWithId = addComment(comment)
        commentsDispatch(addAction(commentWithId))
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
