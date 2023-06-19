import styles from './styles/score-control.module.scss'

type ScoreControlProps = {
    count: number
}

export default function ScoreControl(props: ScoreControlProps) {
    return (
        <div className={styles.scoreControl}>
            <button
                type="button"
                aria-label="Acrescentar 1"
                className={styles.scoreControl__button}
            >
                <img
                    src="images/icon-plus.svg"
                    alt=""
                    className={styles.scoreControl__label}
                />
            </button>
            <span className={styles.scoreControl__count}>{props.count}</span>
            <button
                type="button"
                aria-label="Diminuir 1"
                className={styles.scoreControl__button}
            >
                <img
                    src="images/icon-minus.svg"
                    alt=""
                    className={styles.scoreControl__label}
                />
            </button>
        </div>
    )
}
