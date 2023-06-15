import { useState } from 'react'

import AddComment from '../AddComment'
import BaseComment from './types/base-comment'
import CommentCard from '../CommentCard'
import { useCurrentUser } from '../CommentComponent/user-context'
import useModal from '../Modal/hooks/useModal'
import Modal from '../Modal'
import ModalHeader from '../Modal/modal-header'
import ModalBody from '../Modal/modal-body'

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
            <Modal isOpen={deleteModal.isOpen} onClose={deleteModal.close}>
                <ModalHeader>
                    <p>Delete comment</p>
                </ModalHeader>
                <ModalBody>
                    <p>
                        Are you sure you want to delete this comment? This will
                        remove the comment and can&apos;t be undone.
                    </p>
                </ModalBody>
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
            </Modal>
        </>
    )
}
