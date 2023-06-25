import styles from './styles/tag.module.scss'

type TagProps = {
    text: string
}

export default function Tag(props: TagProps) {
    return <span className={styles.tag}>{props.text}</span>
}
