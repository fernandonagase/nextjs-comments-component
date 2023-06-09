import ScoreControl from '../ScoreControl'

type CommentActionProps = {
    score: number
}

export default function CommentAction(props: CommentActionProps) {
    return (
        <div>
            <ScoreControl count={props.score} />
            <button type="button">Reply</button>
        </div>
    )
}
