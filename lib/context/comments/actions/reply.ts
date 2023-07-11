import Reply from '@/lib/types/reply'

export default function reply(reply: Reply, commentId: string): ReplyAction {
    return {
        type: 'reply',
        reply,
        commentId,
    }
}

export type ReplyAction = {
    type: 'reply'
    reply: Reply
    commentId: string
}
