import Attribution from '@/components/Attribution'
import CommentSection from '@/components/CommentSection'
import { CommentsProvider } from '@/lib/context/comments/comments-context'

export default function Home() {
    return (
        <>
            <CommentsProvider>
                <CommentSection />
            </CommentsProvider>
            <footer>
                <Attribution />
            </footer>
        </>
    )
}
