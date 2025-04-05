'use server'

import { prisma } from "@/lib/prisma"
import { redirect } from "next/navigation"

export async function getMods(){
    return await prisma.mod.findMany()
}

export async function getModById(id: string){
    return await prisma.mod.findUnique({
        where: {
            id
        },
        include:{
            game: {
                select: {
                    slug: true,
                    title: true
                }
            }
        }
    })
}

export async function createMod(data: FormData){
    const name = data.get('name') as string
    const imageUrl = data.get('imageUrl') as string
    const gameId = data.get('gameId') as string
    const newMod = await prisma.mod.create({
        data: {
            name,
            imageUrl,
            game: {
                connect: {
                    id: gameId
                }
            }
        }
    })

    redirect(`/mod/${newMod.id}`)
}