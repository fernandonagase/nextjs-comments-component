import styles from './styles/reply-comment.module.scss'

type ReplyCommentProps = {
    content: string
    username: string
}

export default function ReplyComment(props: ReplyCommentProps) {
    return (
        <>
            <span className={styles.replyingTo}>@{props.username}</span>{' '}
            {props.content}
        </>
    )
}
