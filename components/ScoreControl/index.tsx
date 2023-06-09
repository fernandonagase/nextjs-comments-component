type ScoreControlProps = {
    count: number
}

export default function ScoreControl(props: ScoreControlProps) {
    return (
        <div>
            <button type="button" aria-label="Acrescentar 1">
                -
            </button>
            <span>{props.count}</span>
            <button type="button" aria-label="Diminuir 1">
                +
            </button>
        </div>
    )
}
