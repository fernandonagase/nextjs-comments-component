import AddComment from '../AddComment'
import Modal from '../Modal'
import CommentType from '../Comment/types/comment'
import CommentThread from '../CommentThread'

type CommentComponentProps = {
    comments: CommentType[]
}

export default function CommentComponent(props: CommentComponentProps) {
    return (
        <div>
            <div>
                {props.comments.map((comment) => (
                    <CommentThread comment={comment} key={comment.id} />
                ))}
            </div>
            <AddComment />
            <Modal />
        </div>
    )
}
