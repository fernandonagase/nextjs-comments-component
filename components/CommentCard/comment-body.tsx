import Button from '../Button'
import ReplyComment from '../ReplyComment'
import TextArea from '../TextArea'

// import styles from './styles/comment-card.module.scss'
import styles from './styles/comment-body.module.scss'

type CommentBodyProps = {
    content: string
    replyingTo?: string
    isEditing?: boolean
    handleToggleEdit: () => void
    handleEdit: () => void
}

export default function CommentBody({
    content,
    replyingTo,
    isEditing = false,
    handleToggleEdit,
    handleEdit,
}: CommentBodyProps) {
    return (
        <>
            {isEditing ? (
                <form className={styles.commentBody__editForm}>
                    <TextArea
                        value={content}
                        placeholder="Comment text"
                    ></TextArea>
                    <Button
                        type="submit"
                        onClick={(e) => {
                            e.preventDefault()
                            handleEdit()
                            handleToggleEdit()
                        }}
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
