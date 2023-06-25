import Comment from '../Comment'
import CommentType from '../Comment/types/comment'
import styles from './styles/comment-thread.module.scss'

type CommentThreadProps = {
    comment: CommentType
    className?: string
}

export default function CommentThread(props: CommentThreadProps) {
    const { comment, className } = props
    return (
        <div className={className}>
            <Comment comment={comment} />
            {comment.replies.length > 0 && (
                <div className={styles.commentThread__list}>
                    {comment.replies.map((reply) => (
                        <Comment
                            comment={reply}
                            replyingTo={reply.replyingTo}
                            className={styles.commentThread__reply}
                            key={reply.id}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}
