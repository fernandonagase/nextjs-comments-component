import Comment from '../types/comment'
import { getData } from './db'

async function getComments(): Promise<Comment[]> {
    const store = await getData()
    return store.comments
}

export { getComments }
