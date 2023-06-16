import { useState } from 'react'

import AddComment from '../AddComment'
import BaseComment from './types/base-comment'
import CommentCard from '../CommentCard'
import { useCurrentUser } from '../CommentComponent/user-context'
import useModal from '../AlertDialog/hooks/useModal'
import AlertDialog from '../AlertDialog'
import AlertDialogHeader from '../AlertDialog/alertdialog-header'
import AlertDialogBody from '../AlertDialog/alertdialog-body'

type CommentProps = {
    comment: BaseComment
    replyingTo?: string
}

export default function Comment(props: CommentProps) {
    const { comment, replyingTo } = props

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

    return (
        <>
            <div>
                <CommentCard
                    id={comment.id}
                    body={comment.content}
                    author={comment.user}
                    score={comment.score}
                    publishedAt={comment.createdAt}
                    replyingTo={replyingTo}
                    isReplying={isReplying}
                    isEditing={isEditing}
                    onToggleReply={handleToggleReply}
                    onToggleEdit={handleToggleEdit}
                    onToggleDelete={() => {
                        deleteModal.open()
                    }}
                    key={comment.id}
                />
                {isReplying && (
                    <div id={`reply-comment-${comment.id}`}>
                        <AddComment currentUser={currentUser} />
                    </div>
                )}
            </div>
            <AlertDialog
                isOpen={deleteModal.isOpen}
                onClose={deleteModal.close}
            >
                <AlertDialogHeader>
                    <p>Delete comment</p>
                </AlertDialogHeader>
                <AlertDialogBody>
                    <p>
                        Are you sure you want to delete this comment? This will
                        remove the comment and can&apos;t be undone.
                    </p>
                </AlertDialogBody>
                <div>
                    <button
                        type="button"
                        onClick={() => {
                            deleteModal.close()
                        }}
                    >
                        No, cancel
                    </button>
                    <button type="button">Yes, delete</button>
                </div>
            </AlertDialog>
        </>
    )
}
