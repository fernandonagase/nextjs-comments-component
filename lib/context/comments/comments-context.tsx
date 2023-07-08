'use client'

import {
    Dispatch,
    ReactNode,
    createContext,
    useContext,
    useReducer,
} from 'react'
import RootComment from '../../types/root-comment'
import { InitializeAction } from './actions/initialize'
import { UpvoteAction } from './actions/upvote'
import { DownvoteAction } from './actions/downvote'
import { toggleDownvote, toggleUpvote } from '@/lib/comments'
import Reply from '@/lib/types/reply'

const initialState: RootComment[] = []

type CommentAction = UpvoteAction | DownvoteAction | InitializeAction
function commentsReducer(
    state: typeof initialState,
    action: CommentAction
): RootComment[] {
    switch (action.type) {
        case 'initialize': {
            return [...state, ...action.comments]
        }
        case 'upvote': {
            return state.map((comment) => {
                if (comment.id === action.commentId) {
                    return toggleUpvote(comment, action.userId) as RootComment
                }
                return {
                    ...comment,
                    replies: comment.replies.map((reply) =>
                        reply.id === action.commentId
                            ? (toggleUpvote(reply, action.userId) as Reply)
                            : reply
                    ),
                }
            })
        }
        case 'downvote': {
            return state.map((comment) => {
                if (comment.id === action.commentId) {
                    return toggleDownvote(comment, action.userId) as RootComment
                }
                return {
                    ...comment,
                    replies: comment.replies.map((reply) =>
                        reply.id === action.commentId
                            ? (toggleDownvote(reply, action.userId) as Reply)
                            : reply
                    ),
                }
            })
        }
    }
}

const CommentsContext = createContext<typeof initialState>([])
const CommentsDispatchContext = createContext<Dispatch<CommentAction> | null>(
    null
)

type CommentsProviderProps = {
    children: ReactNode
}
function CommentsProvider({ children }: CommentsProviderProps) {
    const [comments, dispatch] = useReducer(commentsReducer, initialState)

    return (
        <CommentsContext.Provider value={comments}>
            <CommentsDispatchContext.Provider value={dispatch}>
                {children}
            </CommentsDispatchContext.Provider>
        </CommentsContext.Provider>
    )
}

function useComments() {
    return useContext(CommentsContext)
}

function useCommentsDispatch() {
    const commentsDispatch = useContext(CommentsDispatchContext)

    if (!commentsDispatch) {
        throw new Error(
            'useCommentsDispatch has to be used within <CommentsProvider>'
        )
    }

    return commentsDispatch
}

export { CommentsProvider, useComments, useCommentsDispatch }
