type TagProps = {
    text: string
}

export default function Tag(props: TagProps) {
    return <span>{props.text}</span>
}
