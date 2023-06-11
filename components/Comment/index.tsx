import CommentCard from '../CommentCard'
import CommentType from './types/comment'

type CommentProps = {
    comment: CommentType
}

export default function Comment(props: CommentProps) {
    const { comment } = props
    return (
        <div>
            <CommentCard
                body={comment.content}
                author={comment.user}
                score={comment.score}
                publishedAt={comment.createdAt}
                key={comment.id}
            />
            {comment.replies.length > 0 && (
                <div>
                    {comment.replies.map((reply) => (
                        <CommentCard
                            body={reply.content}
                            author={reply.user}
                            score={reply.score}
                            publishedAt={reply.createdAt}
                            key={reply.id}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}
