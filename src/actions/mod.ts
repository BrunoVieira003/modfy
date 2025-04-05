'use server'

import { prisma } from "@/lib/prisma"
import { redirect } from "next/navigation"

interface FiltersOptions{
    game_slug: string
}

export async function getMods(filters?: FiltersOptions){
    const whereFilters: any = {}
    if(filters?.game_slug){
        whereFilters.game = {slug: filters.game_slug}
    }
    
    return await prisma.mod.findMany({
        where: whereFilters
    });
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
        },
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

export async function updateMod(id: string, data: FormData){
    const name = data.get('name') as string
    const imageUrl = data.get('imageUrl') as string
    await prisma.mod.update({
        where: {id},
        data: {
            name,
            imageUrl
        }
    })

    redirect(`/mod/${id}`)
}

export async function deleteMod(id: string){
    await prisma.mod.delete({where: {id}})

    redirect('/games')
}