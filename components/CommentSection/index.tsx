import AddComment from '../AddComment'
import CommentCard from '../CommentCard'
import Modal from '../Modal'
import Comment from './types/comment'

type CommentSectionProps = {
    comments: Comment[]
}

export default function CommentSection(props: CommentSectionProps) {
    return (
        <section>
            <div>
                {props.comments.map((comment) => (
                    <CommentCard
                        body={comment.content}
                        author={comment.user}
                        score={comment.score}
                        publishedAt={comment.createdAt}
                        key={comment.id}
                    />
                ))}
            </div>
            <AddComment />
            <Modal />
        </section>
    )
}
