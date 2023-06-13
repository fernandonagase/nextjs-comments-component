import Comment from '../Comment'
import CommentType from '../Comment/types/comment'

type CommentThreadProps = {
    comment: CommentType
}

export default function CommentThread(props: CommentThreadProps) {
    const { comment } = props
    return (
        <div>
            <Comment comment={comment} />
            {comment.replies.length > 0 && (
                <div>
                    {comment.replies.map((reply) => (
                        <Comment
                            comment={reply}
                            replyingTo={reply.replyingTo}
                            key={reply.id}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}
