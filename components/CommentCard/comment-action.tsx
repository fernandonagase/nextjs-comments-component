import IconButton from '../IconButton'
import ScoreControl from '../ScoreControl'
import styles from './styles/comment-card.module.scss'
import iconButtonStyles from '@/components/IconButton/styles/icon-button.module.scss'

type CommentActionProps = {
    commentId: number
    score: number
    isOwnedByUser: boolean
    isReplying: boolean
    onToggleReply: () => void
    onToggleEdit: () => void
    onToggleDelete: () => void
}

export default function CommentAction(props: CommentActionProps) {
    const {
        commentId,
        score,
        isOwnedByUser,
        isReplying,
        onToggleReply,
        onToggleEdit,
        onToggleDelete,
    } = props
    return (
        <div className={styles.commentCard__action}>
            <ScoreControl count={score} />
            {isOwnedByUser ? (
                <div>
                    <IconButton
                        type="button"
                        iconUrl="images/icon-delete.svg"
                        className={iconButtonStyles['iconButton--danger']}
                        onClick={onToggleDelete}
                    >
                        Delete
                    </IconButton>
                    <IconButton
                        type="button"
                        iconUrl="images/icon-edit.svg"
                        className={iconButtonStyles['iconButton--primary']}
                        onClick={onToggleEdit}
                    >
                        Edit
                    </IconButton>
                </div>
            ) : (
                <IconButton
                    type="button"
                    aria-expanded={isReplying}
                    aria-controls={`reply-comment-${commentId}`}
                    className={iconButtonStyles['iconButton--primary']}
                    iconUrl="images/icon-reply.svg"
                    onClick={onToggleReply}
                >
                    Reply
                </IconButton>
            )}
        </div>
    )
}
