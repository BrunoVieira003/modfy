'use server'

import { prisma } from "@/lib/prisma"
import { redirect } from "next/navigation"

export async function createGame(data: FormData){
    const title = data.get('title') as string
    const imageUrl = data.get('imageUrl') as string
    const slug = title.toLowerCase().replaceAll(' ', '-')
    await prisma.game.create({
        data: {
            title,
            slug,
            imageUrl: imageUrl
        }
    })

    redirect('/games')
}