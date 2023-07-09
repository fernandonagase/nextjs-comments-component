import { useRef } from 'react'
import Button from '../Button'
import ReplyComment from '../ReplyComment'
import TextArea from '../TextArea'

// import styles from './styles/comment-card.module.scss'
import styles from './styles/comment-body.module.scss'

type CommentBodyProps = {
    content: string
    replyingTo?: string
    isEditing?: boolean
    onToggleEdit: () => void
    onEdit: (content: string) => void
}

export default function CommentBody({
    content,
    replyingTo,
    isEditing = false,
    onToggleEdit,
    onEdit,
}: CommentBodyProps) {
    const editTextAreaRef = useRef<HTMLTextAreaElement>(null)

    return (
        <>
            {isEditing ? (
                <form
                    className={styles.commentBody__editForm}
                    onSubmit={(e) => {
                        e.preventDefault()

                        const form = e.target as HTMLFormElement
                        form.reportValidity()

                        if (!editTextAreaRef.current) {
                            throw Error('editTextAreaRef is not assigned')
                        }

                        onEdit(editTextAreaRef.current.value)
                        onToggleEdit()
                    }}
                >
                    <TextArea
                        defaultValue={content}
                        placeholder="Comment text"
                        required
                        ref={editTextAreaRef}
                    ></TextArea>
                    <Button
                        type="submit"
                        variant="rounded"
                        color="primary"
                        className={styles.commentBody__updateButton}
                    >
                        Update
                    </Button>
                </form>
            ) : (
                <p className={styles.commentBody__body}>
                    {replyingTo ? (
                        <ReplyComment username={replyingTo} content={content} />
                    ) : (
                        content
                    )}
                </p>
            )}
        </>
    )
}
