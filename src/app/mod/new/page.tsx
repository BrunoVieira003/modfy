import { getGames } from "@/actions/game";
import { createMod } from "@/actions/mod";
import ImageUrlInput from "@/components/forms/image-url-input";
import TextInput from "@/components/forms/text-input";

export default async function NewMod(){
    const games = await getGames()

    return (
        <div className="border-2 p-8 rounded-lg md:w-4/6 mx-auto">
            <h1 className="text-4xl mb-10">New mod</h1>
            <form className="flex flex-col gap-4 items-stretch" action={createMod}>
                <TextInput label="Title" name="name" required/>
                <ImageUrlInput label="Image URL" name="imageUrl"/>
                <select name="gameId">
                    {games.map(item => <option value={item.id}>{item.title}</option>)}
                </select>
                <input type="submit" className="bg-slate-100 p-2 w-fit rounded-md cursor-pointer mt-12 hover:bg-slate-300 focus:outline-gray-500" value="Create"/>
            </form>
        </div>
    )
}