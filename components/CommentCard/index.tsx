import CommentAction from './comment-action'
import CommentBody from './comment-body'
import CommentHeader from './comment-header'
import User from '../CommentComponent/types/user'
import { useCurrentUser } from '../CommentComponent/user-context'

type CommentCardProps = {
    body: string
    author: User
    score: number
    publishedAt: string
    replyingTo?: string
    onReply: () => void
}

export default function CommentCard(props: CommentCardProps) {
    const { onReply, ...comment } = props

    const currentUser = useCurrentUser()
    const isOwnedByUser = currentUser.username === props.author.username

    return (
        <article>
            <CommentHeader
                author={comment.author}
                publishedAt={comment.publishedAt}
                isOwnedByUser={isOwnedByUser}
            />
            <CommentBody
                content={comment.body}
                replyingTo={comment.replyingTo}
            />
            <CommentAction
                score={comment.score}
                isOwnedByUser={isOwnedByUser}
                onReply={onReply}
            />
        </article>
    )
}
