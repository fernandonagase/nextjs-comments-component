type CommentBodyProps = {
    content: string
}

export default function CommentBody(props: CommentBodyProps) {
    return <div>{props.content}</div>
}
