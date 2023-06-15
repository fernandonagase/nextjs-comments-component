import IconButton from '../IconButton'
import ScoreControl from '../ScoreControl'

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
        <div>
            <ScoreControl count={score} />
            {isOwnedByUser ? (
                <div>
                    <IconButton
                        type="button"
                        iconUrl="images/icon-delete.svg"
                        onClick={onToggleDelete}
                    >
                        Delete
                    </IconButton>
                    <IconButton
                        type="button"
                        iconUrl="images/icon-edit.svg"
                        onClick={onToggleEdit}
                    >
                        Edit
                    </IconButton>
                </div>
            ) : (
                <IconButton
                    type="button"
                    onClick={onToggleReply}
                    aria-expanded={isReplying}
                    aria-controls={`reply-comment-${commentId}`}
                    iconUrl="images/icon-reply.svg"
                >
                    Reply
                </IconButton>
            )}
        </div>
    )
}
