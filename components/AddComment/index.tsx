import Avatar from '../Avatar'
import User from '../CommentComponent/types/user'

type AddCommentProps = {
    currentUser: User
}

export default function AddComment(props: AddCommentProps) {
    return (
        <form>
            <div>
                <label htmlFor="add-comment-textarea">Add a comment</label>
                <textarea
                    placeholder="Add a comment"
                    id="add-comment-textarea"
                ></textarea>
            </div>
            <div>
                <Avatar pictureUrl={props.currentUser.avatarUrl} />
                <button type="submit">Send</button>
            </div>
        </form>
    )
}
