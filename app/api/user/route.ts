import { NextResponse } from 'next/server'
import { getCurrentUser } from '../lib/persistence/authDao'

export async function GET() {
    const currentUser = await getCurrentUser()
    return NextResponse.json(currentUser)
}
