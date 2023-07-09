export default function edit(commentId: string, content: string): EditAction {
    return {
        type: 'edit',
        commentId,
        content,
    }
}

export type EditAction = {
    type: 'edit'
    commentId: string
    content: string
}
