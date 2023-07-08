import { useState } from 'react'

import AddComment from '../AddComment'
import BaseComment from '@/lib/types/comment'
import CommentCard from '../CommentCard'
import { useCurrentUser } from '../../lib/context/user-context'
import styles from './styles/comment.module.scss'
import { useCommentsDispatch } from '@/lib/context/comments/comments-context'
import upvoteAction from '@/lib/context/comments/actions/upvote'
import downvoteAction from '@/lib/context/comments/actions/downvote'
import { toggleDownvote, toggleUpvote } from '@/lib/comments'
import { updateComment } from '@/lib/comments-repository'

type CommentProps = {
    comment: BaseComment
    replyingTo?: string
}

export default function Comment(props: CommentProps) {
    const { comment, replyingTo } = props

    const [isReplying, setIsReplying] = useState(false)

    const currentUser = useCurrentUser()
    const isOwnedByUser = currentUser.username === props.comment.user.username

    const commentsDispatch = useCommentsDispatch()

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

    function onUpvote() {
        updateComment(toggleUpvote(comment, currentUser.username))
        commentsDispatch(upvoteAction(comment.id, currentUser.username))
    }

    function onDownvote() {
        updateComment(toggleDownvote(comment, currentUser.username))
        commentsDispatch(downvoteAction(comment.id, currentUser.username))
    }

    return (
        <>
            <CommentCard
                commentId={comment.id}
                score={comment.upvoted.length - comment.downvoted.length}
                hasUpvoted={comment.upvoted.includes(currentUser.username)}
                hasDownvoted={comment.downvoted.includes(currentUser.username)}
                author={comment.user}
                timestamp={comment.createdAt}
                content={comment.content}
                isReplying={isReplying}
                replyingTo={replyingTo}
                isOwnedByUser={isOwnedByUser}
                onToggleReply={handleToggleReply}
                onEdit={handleEdit}
                onDelete={handleDelete}
                onUpvote={onUpvote}
                onDownvote={onDownvote}
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
