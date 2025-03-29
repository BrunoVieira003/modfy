import { createGame } from "@/actions/actions";
import ImageUrlInput from "@/components/forms/image-url-input";
import TextInput from "@/components/forms/text-input";

export default function NewGame(){
    return (
        <div className="border-2 p-8 rounded-lg md:w-4/6 mx-auto">
            <h1 className="text-4xl mb-10">New game</h1>
            <form className="flex flex-col gap-4 items-stretch" action={createGame}>
                <TextInput label="Title" name="title" required/>
                <ImageUrlInput label="Image URL" name="imageUrl"/>
                <input type="submit" className="bg-slate-100 p-2 w-fit rounded-md cursor-pointer mt-12 hover:bg-slate-300 focus:outline-gray-500" value="Create"/>
            </form>
        </div>
    )
}