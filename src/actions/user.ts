'use server'

import { prisma } from "@/lib/prisma"
import { redirect } from "next/navigation"
import { cookies } from "next/headers"

export async function createUser(data: FormData){
    const email = data.get('email') as string
    const password = data.get('password') as string

    await prisma.user.create({
        data: {
            email,
            password
        }
    })
}

export async function login(data: FormData){
    const email = data.get('email') as string
    const password = data.get('password') as string

    const user = await prisma.user.findUniqueOrThrow({
        where: {
            email,
            password
        }
    })

    const cookie = await cookies()
    cookie.set('logged-user', user.id)

    redirect('/')
}

export async function logout(){
    const cookie = await cookies()
    cookie.delete('logged-user')

    redirect('/')
}