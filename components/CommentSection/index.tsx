import AddComment from '../AddComment'
import CommentCard from '../CommentCard'

export default function CommentSection() {
    return (
        <section>
            <div>
                <CommentCard />
            </div>
            <AddComment />
        </section>
    )
}
