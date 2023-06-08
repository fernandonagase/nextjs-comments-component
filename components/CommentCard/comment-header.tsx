import Avatar from '../Avatar'
import Author from './types/author'

type CommentHeaderProps = {
    author: Author
    publishedAt: string
}

export default function CommentHeader(props: CommentHeaderProps) {
    const { author, publishedAt } = props

    return (
        <header>
            <Avatar pictureUrl={author.avatarUrl} />
            <span>{author.username}</span>
            <span>{publishedAt}</span>
        </header>
    )
}
