import { useMediaQuery } from '@/lib/hooks/useMediaQuery'
import CommentHeader from './comment-header'

import styles from './styles/comment-card.module.scss'
import CommentAction from './comment-action'
import CommentBody from './comment-body'
import ScoreControl from '../ScoreControl'
import User from '@/lib/types/user'
import AlertDialog from '../AlertDialog'
import AlertDialogHeader from '../AlertDialog/alertdialog-header'
import AlertDialogBody from '../AlertDialog/alertdialog-body'
import Button from '../Button'
import useModal from '../AlertDialog/hooks/useModal'
import { useState } from 'react'

type CommentCardProps = {
    commentId: string
    author: User
    score: number
    timestamp: number
    content: string
    isReplying: boolean
    hasUpvoted: boolean
    hasDownvoted: boolean
    replyingTo?: string
    isOwnedByUser?: boolean
    onToggleReply: () => void
    onEdit: (content: string) => void
    onDelete: () => void
    onUpvote: () => void
    onDownvote: () => void
}

export default function CommentCard({
    commentId,
    author,
    score,
    timestamp,
    content,
    isReplying,
    hasUpvoted,
    hasDownvoted,
    replyingTo,
    isOwnedByUser = false,
    onToggleReply,
    onEdit,
    onDelete,
    onUpvote,
    onDownvote,
}: CommentCardProps) {
    const isLargerThan1440 = useMediaQuery('screen and (min-width: 1440px)')

    const [isEditing, setIsEditing] = useState(false)
    const deleteModal = useModal()

    function handleToggleEdit() {
        setIsEditing((prev) => !prev)
    }

    return (
        <>
            <article className={styles.commentCard}>
                <div className={styles.commentCard__content}>
                    <div className={styles.commentCard__head}>
                        <CommentHeader
                            username={author.username}
                            profilePictureUrl={author.profilePictureUrl}
                            createdAt={timestamp}
                            isOwnedByUser={isOwnedByUser}
                        />
                        {isLargerThan1440 && (
                            <div className={styles.commentCard__buttons}>
                                <CommentAction
                                    commentId={commentId}
                                    isReplying={isReplying}
                                    isOwnedByUser={isOwnedByUser}
                                    disabled={isEditing}
                                    onToggleDelete={deleteModal.open}
                                    onToggleEdit={handleToggleEdit}
                                    onToggleReply={onToggleReply}
                                />
                            </div>
                        )}
                    </div>
                    <CommentBody
                        content={content}
                        replyingTo={replyingTo}
                        isEditing={isEditing}
                        onToggleEdit={handleToggleEdit}
                        onEdit={onEdit}
                    />
                </div>
                <div className={styles.commentCard__score}>
                    <ScoreControl
                        count={score}
                        direction={isLargerThan1440 ? 'vertical' : 'horizontal'}
                        hasIncreased={hasUpvoted}
                        hasDecreased={hasDownvoted}
                        disabled={isEditing}
                        onIncrease={onUpvote}
                        onDecrease={onDownvote}
                    />
                </div>
                {!isLargerThan1440 && (
                    <div className={styles.commentCard__mobileActions}>
                        <CommentAction
                            commentId={commentId}
                            isReplying={isReplying}
                            isOwnedByUser={isOwnedByUser}
                            disabled={isEditing}
                            onToggleDelete={deleteModal.open}
                            onToggleEdit={handleToggleEdit}
                            onToggleReply={onToggleReply}
                        />
                    </div>
                )}
            </article>
            <AlertDialog
                isOpen={deleteModal.isOpen}
                onClose={deleteModal.close}
            >
                <AlertDialogHeader>Delete comment</AlertDialogHeader>
                <AlertDialogBody>
                    <p>
                        Are you sure you want to delete this comment? This will
                        remove the comment and can&apos;t be undone.
                    </p>
                </AlertDialogBody>
                <div className={styles.commentCard__alertButtons}>
                    <Button
                        type="button"
                        variant="rounded"
                        color="secondary"
                        onClick={() => {
                            deleteModal.close()
                        }}
                    >
                        No, cancel
                    </Button>
                    <Button
                        type="button"
                        variant="rounded"
                        color="danger"
                        onClick={() => {
                            onDelete()
                            deleteModal.close()
                        }}
                    >
                        Yes, delete
                    </Button>
                </div>
            </AlertDialog>
        </>
    )
}
