import RootComment from '@/lib/types/root-comment'

export default function initialize(comments: RootComment[]): InitializeAction {
    return {
        type: 'initialize',
        comments,
    }
}

export type InitializeAction = {
    type: 'initialize'
    comments: RootComment[]
}
