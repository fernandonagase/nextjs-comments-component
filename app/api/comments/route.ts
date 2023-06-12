import { promises as fs } from 'fs'
import path from 'path'
import { NextResponse } from 'next/server'

export async function GET() {
    const commentsDirectory = path.join(process.cwd(), 'content')

    const json = await fs.readFile(
        path.join(commentsDirectory, 'data.json'),
        'utf-8'
    )
    const data = JSON.parse(json)

    return NextResponse.json(data)
}
