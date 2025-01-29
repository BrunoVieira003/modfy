'use server'
import { configDotenv } from 'dotenv';
import * as fs from 'fs';
import { redirect } from 'next/navigation';
import path from 'path';

configDotenv()

export default async function createMod(formData: FormData) {
    const name = formData.get("name")
    const description = formData.get("description")
    const file = formData.get("file") as File
    const fileBuffer = Buffer.from(await file.arrayBuffer())
    const outputPath = String(process.env.DOWNLOADS_DIR)
    const fileFullName = path.join(outputPath, file.name)
    fs.writeFileSync(fileFullName, fileBuffer)

    let metaContent = []
    metaContent.push(`mod=${String(name)}`)
    metaContent.push(`description=${String(description)}`)
    metaContent.push(`file=${String(fileFullName)}`)
    fs.writeFileSync(path.join(outputPath, file.name+".meta"), metaContent.join("\n"))

    redirect('/')

}