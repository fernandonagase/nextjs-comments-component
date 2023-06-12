type ReplyCommentProps = {
    content: string
    username: string
}

export default function ReplyComment(props: ReplyCommentProps) {
    return (
        <>
            @{props.username} {props.content}
        </>
    )
}
