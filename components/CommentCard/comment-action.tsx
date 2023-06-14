import IconButton from '../IconButton'
import ScoreControl from '../ScoreControl'

type CommentActionProps = {
    commentId: number
    score: number
    isOwnedByUser: boolean
    isReplying: boolean
    onReply: () => void
}

export default function CommentAction(props: CommentActionProps) {
    const { commentId, score, isOwnedByUser, isReplying, onReply } = props
    return (
        <div>
            <ScoreControl count={score} />
            {isOwnedByUser ? (
                <div>
                    <IconButton type="button" iconUrl="images/icon-delete.svg">
                        Delete
                    </IconButton>
                    <IconButton type="button" iconUrl="images/icon-edit.svg">
                        Edit
                    </IconButton>
                </div>
            ) : (
                <IconButton
                    type="button"
                    onClick={onReply}
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
