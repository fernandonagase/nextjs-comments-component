import CommentAction from './comment-action'
import CommentBody from './comment-body'
import CommentHeader from './comment-header'

export default function CommentCard() {
    return (
        <article>
            <CommentHeader />
            <CommentBody />
            <CommentAction />
        </article>
    )
}
