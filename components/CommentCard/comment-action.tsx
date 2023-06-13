import IconButton from '../IconButton'
import ScoreControl from '../ScoreControl'

type CommentActionProps = {
    score: number
    isOwnedByUser: boolean
    onReply: () => void
}

export default function CommentAction(props: CommentActionProps) {
    const { score, isOwnedByUser, onReply } = props
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
                    iconUrl="images/icon-reply.svg"
                >
                    Reply
                </IconButton>
            )}
        </div>
    )
}
