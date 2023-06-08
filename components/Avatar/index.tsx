type AvatarProps = {
    pictureUrl: string
}

export default function Avatar(props: AvatarProps) {
    return <img src={props.pictureUrl} alt="" />
}
