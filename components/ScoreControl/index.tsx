type ScoreControlProps = {
    count: number
}

export default function ScoreControl(props: ScoreControlProps) {
    return (
        <div>
            <button type="button" aria-label="Acrescentar 1">
                <img src="images/icon-plus.svg" alt="" />
            </button>
            <span>{props.count}</span>
            <button type="button" aria-label="Diminuir 1">
                <img src="images/icon-minus.svg" alt="" />
            </button>
        </div>
    )
}
