import ReplyComment from '../ReplyComment'
import styles from './styles/comment-card.module.scss'

type CommentBodyProps = {
    content: string
    replyingTo?: string
}

export default function CommentBody(props: CommentBodyProps) {
    return (
        <p className={styles.commentCard__body}>
            {props.replyingTo ? (
                <ReplyComment
                    username={props.replyingTo}
                    content={props.content}
                />
            ) : (
                props.content
            )}
        </p>
    )
}
