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

const initialState: RootComment[] = []

type CommentAction = InitializeAction
function commentsReducer(
    state: typeof initialState,
    action: CommentAction
): RootComment[] {
    switch (action.type) {
        case 'initialize': {
            return [...state, ...action.comments]
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
