import AddComment from '../AddComment'
import Modal from '../Modal'
import CommentType from '../Comment/types/comment'
import Comment from '../Comment'

type CommentComponentProps = {
    comments: CommentType[]
}

export default function CommentComponent(props: CommentComponentProps) {
    return (
        <div>
            <div>
                {props.comments.map((comment) => (
                    <Comment comment={comment} key={comment.id} />
                ))}
            </div>
            <AddComment />
            <Modal />
        </div>
    )
}
