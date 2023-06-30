import { getCreatedAtString } from '@/lib/util/getCreatedAtString'
import Avatar from '../Avatar'
import Tag from '../Tag'
import styles from './styles/comment-header.module.scss'

type CommentHeaderProps = {
    username: string
    profilePictureUrl: string
    createdAt: number
    isOwnedByUser?: boolean
}

export default function CommentHeader(props: CommentHeaderProps) {
    const { isOwnedByUser = false } = props

    return (
        <header className={styles.commentHeader}>
            <Avatar pictureUrl={props.profilePictureUrl} />
            <div className={styles.commentHeader__usernameContainer}>
                <span className={styles.commentHeader__username}>
                    {props.username}
                </span>
                {isOwnedByUser && <Tag text="you" />}
            </div>
            <span>{getCreatedAtString(props.createdAt)}</span>
        </header>
    )
}
