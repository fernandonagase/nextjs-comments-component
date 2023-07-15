export default function deleteAction(commentId: string): DeleteAction {
    return { type: 'delete', commentId }
}

export type DeleteAction = {
    type: 'delete'
    commentId: string
}
