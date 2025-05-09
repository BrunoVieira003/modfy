'use server'
import { prisma } from "@/lib/prisma"
import { mkdir, writeFile } from "fs/promises"
import { redirect } from "next/navigation"
import path from "path"

export async function createModEntry(modId: string, formData: FormData){
    const modVersion = formData.get('modVersion') as string
    const gameVersion = formData.get('gameVersion') as string
    const file = formData.get('file') as File;
    
      if (!file || typeof file === 'string') {
        throw new Error('Invalid file');
      }
    
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);
    
      const uploadDir = path.join(process.cwd(), 'uploads');
      await mkdir(uploadDir, { recursive: true });
    
      const filePath = path.join(uploadDir, file.name);
      await writeFile(filePath, buffer);

    await prisma.modEntry.create({
        data: {
            version: modVersion,
            gameVersion,
            filePath,
            mod: {
                connect: {
                    id: modId
                }
            }
        }
    })

    redirect(`/mod/${modId}`)
}

export async function getModEntryById(entryId: string){
    const result = await prisma.modEntry.findUnique({
        where: {
            id: entryId
        }
    })
    return result
}