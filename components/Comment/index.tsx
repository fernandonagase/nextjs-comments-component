import { useState } from 'react'

import AddComment from '../AddComment'
import BaseComment from './types/base-comment'
import CommentCard from '../CommentCard'

type CommentProps = {
    comment: BaseComment
    replyingTo?: string
}

export default function Comment(props: CommentProps) {
    const { comment, replyingTo } = props
    const [isReplying, setIsReplying] = useState(false)

    function handleReply() {
        setIsReplying((prev) => !prev)
    }

    return (
        <div>
            <CommentCard
                body={comment.content}
                author={comment.user}
                score={comment.score}
                publishedAt={comment.createdAt}
                replyingTo={replyingTo}
                onReply={handleReply}
                key={comment.id}
            />
            {isReplying && <AddComment />}
        </div>
    )
}
