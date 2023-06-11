import AddComment from '../AddComment'
import Modal from '../Modal'
import CommentType from '../Comment/types/comment'
import Comment from '../Comment'

type CommentSectionProps = {
    comments: CommentType[]
}

export default function CommentSection(props: CommentSectionProps) {
    return (
        <section>
            <div>
                {props.comments.map((comment) => (
                    <Comment comment={comment} key={comment.id} />
                ))}
            </div>
            <AddComment />
            <Modal />
        </section>
    )
}
