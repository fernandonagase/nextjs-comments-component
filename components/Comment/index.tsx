import { useState } from 'react'

import AddComment from '../AddComment'
import BaseComment from './types/base-comment'
import CommentCard from '../CommentCard'
import { useCurrentUser } from '../CommentComponent/user-context'

type CommentProps = {
    comment: BaseComment
    replyingTo?: string
}

export default function Comment(props: CommentProps) {
    const { comment, replyingTo } = props

    const [isReplying, setIsReplying] = useState(false)
    const currentUser = useCurrentUser()

    function handleToggleReply() {
        setIsReplying((prev) => !prev)
    }

    return (
        <div>
            <CommentCard
                id={comment.id}
                body={comment.content}
                author={comment.user}
                score={comment.score}
                publishedAt={comment.createdAt}
                replyingTo={replyingTo}
                isReplying={isReplying}
                onToggleReply={handleToggleReply}
                key={comment.id}
            />
            {isReplying && (
                <div id={`reply-comment-${comment.id}`}>
                    <AddComment currentUser={currentUser} />
                </div>
            )}
        </div>
    )
}
