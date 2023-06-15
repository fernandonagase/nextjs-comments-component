import CommentAction from './comment-action'
import CommentBody from './comment-body'
import CommentHeader from './comment-header'
import User from '../CommentComponent/types/user'
import { useCurrentUser } from '../CommentComponent/user-context'

type CommentCardProps = {
    id: number
    body: string
    author: User
    score: number
    publishedAt: string
    replyingTo?: string
    isReplying?: boolean
    isEditing?: boolean
    onToggleReply: () => void
    onToggleEdit: () => void
    onToggleDelete: () => void
}

export default function CommentCard(props: CommentCardProps) {
    const {
        onToggleReply,
        onToggleEdit,
        onToggleDelete,
        isReplying = false,
        isEditing = false,
        ...comment
    } = props

    const currentUser = useCurrentUser()
    const isOwnedByUser = currentUser.username === props.author.username

    return (
        <article>
            <CommentHeader
                author={comment.author}
                publishedAt={comment.publishedAt}
                isOwnedByUser={isOwnedByUser}
            />
            {isEditing ? (
                <form>
                    <textarea>{comment.body}</textarea>
                    <button type="submit">Update</button>
                </form>
            ) : (
                <CommentBody
                    content={comment.body}
                    replyingTo={comment.replyingTo}
                />
            )}
            <CommentAction
                commentId={comment.id}
                score={comment.score}
                isOwnedByUser={isOwnedByUser}
                isReplying={isReplying}
                onToggleReply={onToggleReply}
                onToggleEdit={onToggleEdit}
                onToggleDelete={onToggleDelete}
            />
        </article>
    )
}
