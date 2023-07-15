import Comment from '../Comment'
import RootComment from '@/lib/types/root-comment'
import styles from './styles/comment-thread.module.scss'

type CommentThreadProps = {
    comment: RootComment
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
                            key={reply.id}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}
