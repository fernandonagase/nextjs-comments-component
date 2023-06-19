import Avatar from '../Avatar'
import Tag from '../Tag'
import User from '../CommentComponent/types/user'
import styles from './styles/comment-card.module.scss'

type CommentHeaderProps = {
    author: User
    publishedAt: string
    isOwnedByUser: boolean
}

export default function CommentHeader(props: CommentHeaderProps) {
    const { author, publishedAt, isOwnedByUser } = props

    return (
        <header className={styles.commentCard__header}>
            <Avatar pictureUrl={author.avatarUrl} />
            <div>
                <span className={styles.commentCard__username}>
                    {author.username}
                </span>
                {isOwnedByUser && <Tag text="you" />}
            </div>
            <span>{publishedAt}</span>
        </header>
    )
}
