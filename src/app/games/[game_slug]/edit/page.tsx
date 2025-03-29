import { createGame, updateGame } from "@/actions/actions";
import ImageUrlInput from "@/components/forms/image-url-input";
import TextInput from "@/components/forms/text-input";
import { prisma } from "@/lib/prisma";
import { useActionState } from "react";

interface propsType{
    params: Promise<{game_slug: string}>
}

export default async function NewGame({params}: propsType){
    const {game_slug} = await params
    const game = await prisma.game.findUnique({where: {slug: game_slug} })
    const game_id = game ? game.id : ""

    const updateGameAction = updateGame.bind(null, game_id)
    

    return (
        <div className="border-2 p-8 rounded-lg md:w-4/6 mx-auto">
            <h1 className="text-4xl mb-10">Edit game</h1>
            <form className="flex flex-col gap-4 items-stretch" action={updateGameAction}>
                <TextInput label="Title" name="title" required defaultValue={game?.title}/>
                <ImageUrlInput label="Image URL" name="imageUrl" defaultValue={game?.imageUrl || ""}/>
                <input type="submit" className="bg-slate-100 p-2 w-fit rounded-md cursor-pointer mt-12 hover:bg-slate-300 focus:outline-gray-500" value="Save changes"/>
            </form>
        </div>
    )
}