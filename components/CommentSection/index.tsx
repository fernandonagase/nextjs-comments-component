'use client'

import { useEffect, useState } from 'react'

import CommentComponent from '../CommentComponent'
import styles from './styles/comment-section.module.scss'
import { getComments } from '@/lib/comments-repository'
import User from '@/lib/types/user'
import { getCurrentUser } from '@/lib/user-repository'
import UserContext from '@/lib/context/user-context'
import {
    useComments,
    useCommentsDispatch,
} from '@/lib/context/comments/comments-context'
import initialize from '@/lib/context/comments/actions/initialize'

export default function CommentSection() {
    const comments = useComments()
    const commentsDispatch = useCommentsDispatch()

    const [currentUser, setCurrentUser] = useState<User | null>(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        async function fetchUser() {
            setCurrentUser(await getCurrentUser())
        }
        fetchUser()
    }, [])

    useEffect(() => {
        async function fetchComments() {
            setIsLoading(true)
            commentsDispatch(initialize(await getComments()))
            setIsLoading(false)
        }
        fetchComments()
    }, [commentsDispatch])

    if (!currentUser) return <p>Fazendo login...</p>

    return (
        <UserContext.Provider value={currentUser}>
            <section className={styles.commentSection}>
                {isLoading ? (
                    <p>Carregando comentários...</p>
                ) : (
                    <CommentComponent comments={comments} />
                )}
            </section>
        </UserContext.Provider>
    )
}
