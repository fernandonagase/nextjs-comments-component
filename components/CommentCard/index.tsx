import classNames from 'classnames'

import styles from './styles/comment-card.module.scss'
import CommentAction from './comment-action'
import CommentBody from './comment-body'
import CommentHeader from './comment-header'
import User from '../CommentComponent/types/user'
import { useCurrentUser } from '../CommentComponent/user-context'
import TextArea from '../TextArea'
import Button from '../Button'
import buttonStyles from '../Button/styles/button.module.scss'

type CommentCardProps = {
    id: number
    body: string
    author: User
    score: number
    publishedAt: string
    replyingTo?: string
    isReplying?: boolean
    isEditing?: boolean
    isDeleting?: boolean
    onToggleReply: () => void
    onToggleEdit: () => void
    onEdit: () => void
    onToggleDelete: () => void
}

export default function CommentCard(props: CommentCardProps) {
    const {
        onToggleReply,
        onToggleEdit,
        onEdit,
        onToggleDelete,
        isReplying = false,
        isEditing = false,
        isDeleting = false,
        ...comment
    } = props

    const currentUser = useCurrentUser()
    const isOwnedByUser = currentUser.username === props.author.username

    return (
        <article className={styles.commentCard}>
            <CommentHeader
                author={comment.author}
                publishedAt={comment.publishedAt}
                isOwnedByUser={isOwnedByUser}
            />
            {isEditing ? (
                <form className={styles.commentCard__editForm}>
                    <TextArea>{comment.body}</TextArea>
                    <Button
                        type="submit"
                        onClick={(e) => {
                            e.preventDefault()
                            onEdit()
                            onToggleEdit()
                        }}
                        className={classNames([
                            buttonStyles['button--rounded'],
                            buttonStyles['button--primary'],
                        ])}
                    >
                        Update
                    </Button>
                </form>
            ) : (
                <CommentBody
                    content={comment.body}
                    replyingTo={comment.replyingTo}
                />
            )}
            <CommentAction
                commentId={comment.id}
                score={comment.score}
                isOwnedByUser={isOwnedByUser}
                isReplying={isReplying}
                isEditing={isEditing}
                onToggleReply={onToggleReply}
                onToggleEdit={onToggleEdit}
                onToggleDelete={onToggleDelete}
            />
        </article>
    )
}
