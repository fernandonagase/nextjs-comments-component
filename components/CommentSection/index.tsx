import AddComment from '../AddComment'
import CommentCard from '../CommentCard'

const commentData = {
    id: 1,
    content:
        "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
    createdAt: '1 month ago',
    score: 12,
    user: {
        image: {
            png: './images/avatars/image-amyrobson.png',
            webp: './images/avatars/image-amyrobson.webp',
        },
        username: 'amyrobson',
    },
    replies: [],
}

export default function CommentSection() {
    return (
        <section>
            <div>
                <CommentCard
                    body={commentData.content}
                    author={{
                        username: commentData.user.username,
                        avatarUrl: commentData.user.image.png,
                    }}
                    score={commentData.score}
                    publishedAt={commentData.createdAt}
                    isOwnedByUser
                />
                <CommentCard
                    body={commentData.content}
                    author={{
                        username: commentData.user.username,
                        avatarUrl: commentData.user.image.png,
                    }}
                    score={commentData.score}
                    publishedAt={commentData.createdAt}
                />
            </div>
            <AddComment />
        </section>
    )
}
