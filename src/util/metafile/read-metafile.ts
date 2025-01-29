import ModMetadata from '@/interfaces/mod-metadata'
import fs from 'fs'
import fsp from 'fs/promises'

export default async function readMetafile(path: string): Promise<ModMetadata>{
    const content = await fsp.readFile(path, 'utf-8')
    const lines = content.trim().split("\n")
    const entries = lines.map(en => [en.split("=")[0], en.split("=")[1] || ""])
    return Object.fromEntries(entries)
}