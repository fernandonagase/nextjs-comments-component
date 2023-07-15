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
import {
    addReply,
    editContent,
    toggleDownvote,
    toggleUpvote,
} from '@/lib/comments'
import Reply from '@/lib/types/reply'
import { EditAction } from './actions/edit'
import { DeleteAction } from './actions/delete'
import { AddAction } from './actions/add'
import { ReplyAction } from './actions/reply'

const initialState: RootComment[] = []

type CommentAction =
    | AddAction
    | ReplyAction
    | EditAction
    | DeleteAction
    | UpvoteAction
    | DownvoteAction
    | InitializeAction
function commentsReducer(
    state: typeof initialState,
    action: CommentAction
): RootComment[] {
    switch (action.type) {
        case 'add': {
            return [...state, action.comment]
        }
        case 'reply': {
            return state.map((comment) => {
                return comment.id === action.commentId ||
                    comment.replies.some(
                        (reply) => reply.id === action.commentId
                    )
                    ? addReply(action.reply, comment)
                    : comment
            })
        }
        case 'edit': {
            return state.map((comment) => {
                if (comment.id === action.commentId) {
                    return editContent(comment, action.content) as RootComment
                }
                return {
                    ...comment,
                    replies: comment.replies.map((reply) =>
                        reply.id === action.commentId
                            ? (editContent(reply, action.content) as Reply)
                            : reply
                    ),
                }
            })
        }
        case 'delete': {
            return state
                .filter((comment) => comment.id !== action.commentId)
                .map((comment) => {
                    return {
                        ...comment,
                        replies: comment.replies.filter(
                            (reply) => reply.id !== action.commentId
                        ),
                    }
                })
        }
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
