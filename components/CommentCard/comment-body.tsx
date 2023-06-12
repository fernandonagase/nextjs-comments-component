import ReplyComment from '../ReplyComment'

type CommentBodyProps = {
    content: string
    replyingTo?: string
}

export default function CommentBody(props: CommentBodyProps) {
    return (
        <p>
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
