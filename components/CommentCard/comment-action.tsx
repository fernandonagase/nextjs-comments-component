import ScoreControl from '../ScoreControl'

type CommentActionProps = {
    score: number
    isOwnedByUser: boolean
}

export default function CommentAction(props: CommentActionProps) {
    const { score, isOwnedByUser } = props
    return (
        <div>
            <ScoreControl count={score} />
            {isOwnedByUser ? (
                <div>
                    <button type="button">Delete</button>
                    <button type="button">Edit</button>
                </div>
            ) : (
                <button type="button">Reply</button>
            )}
        </div>
    )
}
