import CountControl from '../CountControl'

type CommentActionProps = {
    score: number
}

export default function CommentAction(props: CommentActionProps) {
    return (
        <div>
            <CountControl count={props.score} />
            <button type="button">Reply</button>
        </div>
    )
}
