import CommentAction from './comment-action'
import CommentBody from './comment-body'
import CommentHeader from './comment-header'
import Author from './types/author'

type CommentCardProps = {
    body: string
    author: Author
    score: number
    publishedAt: string
}

export default function CommentCard(props: CommentCardProps) {
    const { body, score, author, publishedAt } = props

    return (
        <article>
            <CommentHeader author={author} publishedAt={publishedAt} />
            <CommentBody content={body} />
            <CommentAction score={score} />
        </article>
    )
}
