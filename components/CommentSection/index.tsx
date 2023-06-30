'use client'

import { useEffect, useState } from 'react'

import CommentComponent from '../CommentComponent'
import styles from './styles/comment-section.module.scss'
import { getComments } from '@/lib/comments-repository'
import RootComment from '@/lib/types/root-comment'
import User from '@/lib/types/user'
import { getCurrentUser } from '@/lib/user-repository'
import UserContext from '@/lib/context/user-context'

export default function CommentSection() {
    const [comments, setComments] = useState<RootComment[]>([])
    const [currentUser, setCurrentUser] = useState<User | null>(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        async function fetchComments() {
            setIsLoading(true)
            setComments(await getComments())
            setCurrentUser(await getCurrentUser())
            setIsLoading(false)
        }
        fetchComments()
    }, [])

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
