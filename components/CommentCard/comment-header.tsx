import Avatar from '../Avatar'
import Tag from '../Tag'
import Author from './types/author'

type CommentHeaderProps = {
    author: Author
    publishedAt: string
    isOwnedByUser: boolean
}

export default function CommentHeader(props: CommentHeaderProps) {
    const { author, publishedAt, isOwnedByUser } = props

    return (
        <header>
            <Avatar pictureUrl={author.avatarUrl} />
            <div>
                <span>{author.username}</span>
                {isOwnedByUser && <Tag text="you" />}
            </div>
            <span>{publishedAt}</span>
        </header>
    )
}
