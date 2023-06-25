import styles from './styles/attribution.module.scss'

export default function Attribution() {
    return (
        <div className={styles.attribution}>
            <p>
                Challenge by{' '}
                <a href="https://www.frontendmentor.io?ref=challenge">
                    Frontend Mentor
                </a>
                .
            </p>{' '}
            <p>
                Coded by{' '}
                <a href="https://github.com/fernandonagase">Fernando Nagase</a>.
            </p>
        </div>
    )
}
