import { useState } from 'react'
import classNames from 'classnames'

import AddComment from '../AddComment'
import BaseComment from './types/base-comment'
import CommentCard from '../CommentCard'
import { useCurrentUser } from '../CommentComponent/user-context'
import useModal from '../AlertDialog/hooks/useModal'
import AlertDialog from '../AlertDialog'
import AlertDialogHeader from '../AlertDialog/alertdialog-header'
import AlertDialogBody from '../AlertDialog/alertdialog-body'
import styles from './styles/comment.module.scss'
import Button from '../Button'
import buttonStyles from '../Button/styles/button.module.scss'

type CommentProps = {
    comment: BaseComment
    replyingTo?: string
    className?: string
}

export default function Comment(props: CommentProps) {
    const { comment, replyingTo, className } = props

    const [isReplying, setIsReplying] = useState(false)
    const [isEditing, setIsEditing] = useState(false)
    const deleteModal = useModal()
    const currentUser = useCurrentUser()

    function handleToggleReply() {
        setIsReplying((prev) => !prev)
    }

    function handleToggleEdit() {
        setIsEditing((prev) => !prev)
    }

    function handleEdit() {
        alert('Comment successfully edited!')
    }

    return (
        <>
            <div className={className}>
                <CommentCard
                    id={comment.id}
                    body={comment.content}
                    author={comment.user}
                    score={comment.score}
                    publishedAt={comment.createdAt}
                    replyingTo={replyingTo}
                    isReplying={isReplying}
                    isEditing={isEditing}
                    isDeleting={deleteModal.isOpen}
                    onToggleReply={handleToggleReply}
                    onToggleEdit={handleToggleEdit}
                    onEdit={handleEdit}
                    onToggleDelete={() => {
                        deleteModal.open()
                    }}
                    key={comment.id}
                />
                {isReplying && (
                    <div
                        id={`reply-comment-${comment.id}`}
                        className={styles.comment__replyForm}
                    >
                        <AddComment currentUser={currentUser} />
                    </div>
                )}
            </div>
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
                <div className={styles.comment__buttons}>
                    <Button
                        type="button"
                        className={classNames([
                            buttonStyles['button--rounded'],
                            buttonStyles['button--secondary'],
                        ])}
                        onClick={() => {
                            deleteModal.close()
                        }}
                    >
                        No, cancel
                    </Button>
                    <Button
                        type="button"
                        className={classNames([
                            buttonStyles['button--rounded'],
                            buttonStyles['button--danger'],
                        ])}
                    >
                        Yes, delete
                    </Button>
                </div>
            </AlertDialog>
        </>
    )
}
