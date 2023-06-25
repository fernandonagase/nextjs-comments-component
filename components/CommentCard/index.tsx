import classNames from 'classnames'

import styles from './styles/comment-card.module.scss'
import CommentBody from './comment-body'
import User from '../CommentComponent/types/user'
import { useCurrentUser } from '../CommentComponent/user-context'
import TextArea from '../TextArea'
import Button from '../Button'
import buttonStyles from '../Button/styles/button.module.scss'
import { useMediaQuery } from '@/lib/hooks/useMediaQuery'
import ScoreControl from '../ScoreControl'
import IconButton from '../IconButton'
import { DeleteIcon, EditIcon, ReplyIcon } from './icons'
import iconButtonStyles from '@/components/IconButton/styles/icon-button.module.scss'
import Avatar from '../Avatar'
import Tag from '../Tag'

type AuthorizedActionsProps = {
    disabled: boolean
    onToggleEdit: () => void
    onToggleDelete: () => void
}

function AuthorizedActions(props: AuthorizedActionsProps) {
    return (
        <div className={styles.commentCard__buttons}>
            <IconButton
                type="button"
                icon={<DeleteIcon />}
                disabled={props.disabled}
                className={iconButtonStyles['iconButton--danger']}
                onClick={props.onToggleDelete}
            >
                Delete
            </IconButton>
            <IconButton
                type="button"
                icon={<EditIcon />}
                className={iconButtonStyles['iconButton--primary']}
                onClick={props.onToggleEdit}
            >
                Edit
            </IconButton>
        </div>
    )
}

type UnauthorizedActionsProps = {
    isReplying: boolean
    commentId: number
    onToggleReply: () => void
}

function UnauthorizedActions(props: UnauthorizedActionsProps) {
    return (
        <IconButton
            type="button"
            aria-expanded={props.isReplying}
            aria-controls={`reply-comment-${props.commentId}`}
            className={iconButtonStyles['iconButton--primary']}
            icon={<ReplyIcon />}
            onClick={props.onToggleReply}
        >
            Reply
        </IconButton>
    )
}

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

    const isLargerThan1440 = useMediaQuery('screen and (min-width: 1440px)')

    return (
        <article className={styles.commentCard}>
            {isLargerThan1440 && (
                <ScoreControl count={comment.score} direction="vertical" />
            )}
            <div className={styles.commentCard__mainContent}>
                <div>
                    <header className={styles.commentCard__header}>
                        <Avatar pictureUrl={comment.author.avatarUrl} />
                        <div className={styles.commentCard__usernameContainer}>
                            <span className={styles.commentCard__username}>
                                {comment.author.username}
                            </span>
                            {isOwnedByUser && <Tag text="you" />}
                        </div>
                        <span>{comment.publishedAt}</span>
                        {isLargerThan1440 && (
                            <div className={styles.commentCard__headerActions}>
                                {isOwnedByUser ? (
                                    <AuthorizedActions
                                        disabled={isEditing}
                                        onToggleEdit={onToggleEdit}
                                        onToggleDelete={onToggleDelete}
                                    />
                                ) : (
                                    <UnauthorizedActions
                                        isReplying={isReplying}
                                        commentId={comment.id}
                                        onToggleReply={onToggleReply}
                                    />
                                )}
                            </div>
                        )}
                    </header>
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
                                    styles.commentCard__updateButton,
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
                </div>
                {!isLargerThan1440 && (
                    <div className={styles.commentCard__action}>
                        <ScoreControl count={comment.score} />
                        {isOwnedByUser ? (
                            <AuthorizedActions
                                disabled={isEditing}
                                onToggleEdit={onToggleEdit}
                                onToggleDelete={onToggleDelete}
                            />
                        ) : (
                            <UnauthorizedActions
                                isReplying={isReplying}
                                commentId={comment.id}
                                onToggleReply={onToggleReply}
                            />
                        )}
                    </div>
                )}
            </div>
        </article>
    )
}
