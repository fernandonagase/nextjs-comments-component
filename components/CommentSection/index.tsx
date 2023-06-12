'use client'

import { useEffect, useState } from 'react'

import CommentType from '../Comment/types/comment'
import CommentComponent from '../CommentComponent'
import { getComments } from '@/lib/comment'

export default function CommentSection() {
    const [comments, setComments] = useState<CommentType[]>([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        async function fetchComments() {
            setIsLoading(true)
            setComments(await getComments())
            setIsLoading(false)
        }
        fetchComments()
    }, [])

    return (
        <section>
            {isLoading ? (
                <p>Carregando comentários...</p>
            ) : (
                <CommentComponent comments={comments} />
            )}
        </section>
    )
}
