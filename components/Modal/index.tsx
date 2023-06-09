export default function Modal() {
    return (
        <div>
            <p>Delete comment</p>
            <p>
                Are you sure you want to delete this comment? This will remove
                the comment and can&apos;t be undone.
            </p>
            <div>
                <button type="button">No, cancel</button>
                <button type="button">Yes, delete</button>
            </div>
        </div>
    )
}
