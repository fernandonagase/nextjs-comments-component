import { promises as fs } from 'fs'
import path from 'path'

import DataStore from '../types/data-store'

async function getData(): Promise<DataStore> {
    const dataDirectory = path.join(process.cwd(), 'content')
    const json = await fs.readFile(
        path.join(dataDirectory, 'data.json'),
        'utf-8'
    )
    return JSON.parse(json)
}

export { getData }
