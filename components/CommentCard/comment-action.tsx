import IconButton from '@/components/IconButton'
import { DeleteIcon, EditIcon, ReplyIcon } from './icons'

type CommentActionProps = {
    commentId: string
    isReplying: boolean
    isOwnedByUser?: boolean
    disabled?: boolean
    onToggleEdit: () => void
    onToggleDelete: () => void
    onToggleReply: () => void
}

export default function CommentAction({
    commentId,
    isReplying,
    isOwnedByUser = false,
    disabled = false,
    ...handlers
}: CommentActionProps) {
    return (
        <div>
            {isOwnedByUser ? (
                <>
                    <IconButton
                        type="button"
                        icon={<DeleteIcon />}
                        disabled={disabled}
                        variant="danger"
                        onClick={handlers.onToggleDelete}
                    >
                        Delete
                    </IconButton>
                    <IconButton
                        type="button"
                        icon={<EditIcon />}
                        variant="primary"
                        onClick={handlers.onToggleEdit}
                    >
                        Edit
                    </IconButton>
                </>
            ) : (
                <IconButton
                    type="button"
                    aria-expanded={isReplying}
                    aria-controls={`reply-comment-${commentId}`}
                    variant="primary"
                    icon={<ReplyIcon />}
                    onClick={handlers.onToggleReply}
                >
                    Reply
                </IconButton>
            )}
        </div>
    )
}
