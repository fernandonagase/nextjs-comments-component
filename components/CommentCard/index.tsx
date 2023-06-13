import CommentAction from './comment-action'
import CommentBody from './comment-body'
import CommentHeader from './comment-header'
import Author from './types/author'

type CommentCardProps = {
    body: string
    author: Author
    score: number
    publishedAt: string
    isOwnedByUser?: boolean
    replyingTo?: string
    onReply: () => void
}

export default function CommentCard(props: CommentCardProps) {
    const { isOwnedByUser = false, onReply, ...comment } = props

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
