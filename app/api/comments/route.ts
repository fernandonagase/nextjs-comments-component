import { NextResponse } from 'next/server'

import { getComments } from '../lib/persistence/commentsDao'

export async function GET() {
    const comments = await getComments()
    return NextResponse.json(comments)
}
