import { createGame } from "@/actions/actions";
import TextInput from "@/components/forms/text-input";
import UrlInput from "@/components/forms/url-input";

export default function NewGame(){
    return (
        <div>
            <h1 className="text-4xl mb-10">New game</h1>
            <form className="flex flex-col gap-4 items-stretch" action={createGame}>
                <TextInput label="Title" name="title" required/>
                <UrlInput label="Image URL" name="imageUrl"/>
                <input type="submit" className="bg-slate-100 p-2 w-fit rounded-md cursor-pointer hover:bg-slate-300 focus:outline-gray-500" value="Create"/>
            </form>
        </div>
    )
}