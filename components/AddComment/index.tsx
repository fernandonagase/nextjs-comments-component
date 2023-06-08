import Avatar from '../Avatar'

export default function AddComment() {
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
                <Avatar pictureUrl="images/avatars/image-amyrobson.png" />
                <button type="submit">Send</button>
            </div>
        </form>
    )
}
