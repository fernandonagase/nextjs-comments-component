import { useState } from 'react'

import AddComment from '../AddComment'
import BaseComment from '@/lib/types/comment'
import CommentCard from '../CommentCard'
import { useCurrentUser } from '../../lib/context/user-context'
import styles from './styles/comment.module.scss'

type CommentProps = {
    comment: BaseComment
    replyingTo?: string
}

export default function Comment(props: CommentProps) {
    const { comment, replyingTo } = props

    const [isReplying, setIsReplying] = useState(false)

    const currentUser = useCurrentUser()
    const isOwnedByUser = currentUser.username === props.comment.user.username

    function handleToggleReply() {
        setIsReplying((prev) => !prev)
    }

    function handleReply() {
        alert('Replied with success!')
        setIsReplying(false)
    }

    function handleEdit() {
        alert('Comment successfully edited!')
    }

    function handleDelete() {
        alert('Comment successfully deleted!')
    }

    return (
        <>
            <CommentCard
                commentId={comment.id}
                score={comment.score}
                author={comment.user}
                timestamp={comment.createdAt}
                content={comment.content}
                isReplying={isReplying}
                replyingTo={replyingTo}
                isOwnedByUser={isOwnedByUser}
                onToggleReply={handleToggleReply}
                onEdit={handleEdit}
                onDelete={handleDelete}
            />
            {isReplying && (
                <div
                    id={`reply-comment-${comment.id}`}
                    className={styles.comment__replyForm}
                >
                    <AddComment
                        currentUser={currentUser}
                        isReplying={isReplying}
                        autofocus
                        onSubmit={handleReply}
                    />
                </div>
            )}
        </>
    )
}
