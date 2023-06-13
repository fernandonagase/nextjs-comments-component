'use client'

import { useEffect, useState } from 'react'

import CommentType from '../Comment/types/comment'
import CommentComponent from '../CommentComponent'
import { getData } from '@/lib/comment'
import User from '../CommentComponent/types/user'

export default function CommentSection() {
    const [comments, setComments] = useState<CommentType[]>([])
    const [currentUser, setCurrentUser] = useState<User>()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        async function fetchComments() {
            setIsLoading(true)
            const data = await getData()
            setComments(data.comments)
            setCurrentUser(data.currentUser)
            setIsLoading(false)
        }
        fetchComments()
    }, [])

    return (
        <section>
            {isLoading ? (
                <p>Carregando comentários...</p>
            ) : (
                <CommentComponent
                    comments={comments}
                    /*
                        Perigo: é necessário garantir que CommentComponent nunca
                        será renderizado com currentUser como null
                    */
                    currentUser={currentUser!}
                />
            )}
        </section>
    )
}
