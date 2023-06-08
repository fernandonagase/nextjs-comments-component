type CountControlProps = {
    count: number
}

export default function CountControl(props: CountControlProps) {
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
