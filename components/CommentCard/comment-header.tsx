import { getCreatedAtString } from '@/lib/util/getCreatedAtString'
import Avatar from '../Avatar'
import Tag from '../Tag'
import styles from './styles/comment-header.module.scss'
import { useEffect, useState } from 'react'

type CommentHeaderProps = {
    username: string
    profilePictureUrl: string
    createdAt: number
    isOwnedByUser?: boolean
}

export default function CommentHeader(props: CommentHeaderProps) {
    const { createdAt, isOwnedByUser = false } = props
    const [createdAtString, setCreatedAtString] = useState('')

    useEffect(() => {
        setCreatedAtString(getCreatedAtString(createdAt))
    }, [createdAt])

    return (
        <header className={styles.commentHeader}>
            <Avatar pictureUrl={props.profilePictureUrl} />
            <div className={styles.commentHeader__usernameContainer}>
                <span className={styles.commentHeader__username}>
                    {props.username}
                </span>
                {isOwnedByUser && <Tag text="you" />}
            </div>
            <span>{createdAtString}</span>
        </header>
    )
}
