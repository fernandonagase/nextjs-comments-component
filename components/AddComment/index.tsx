import Avatar from '../Avatar'
import User from '../CommentComponent/types/user'
import FormControl from '../FormControl'
import TextArea from '../TextArea'
import styles from './styles/add-comment.module.scss'

type AddCommentProps = {
    currentUser: User
}

export default function AddComment(props: AddCommentProps) {
    return (
        <form className={styles.commentForm}>
            <FormControl label="Add a comment" inputId="add-comment-textarea">
                <TextArea
                    placeholder="Add a comment..."
                    id="add-comment-textarea"
                ></TextArea>
            </FormControl>
            <div className={styles.commentForm__action}>
                <Avatar pictureUrl={props.currentUser.avatarUrl} />
                <button type="submit">Send</button>
            </div>
        </form>
    )
}
