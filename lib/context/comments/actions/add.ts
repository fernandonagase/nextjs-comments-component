import RootComment from '@/lib/types/root-comment'

export default function add(comment: RootComment): AddAction {
    return {
        type: 'add',
        comment,
    }
}

export type AddAction = {
    type: 'add'
    comment: RootComment
}
