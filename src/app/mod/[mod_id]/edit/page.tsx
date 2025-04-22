import { getModById, updateMod } from "@/actions/mod";
import ImageUrlInput from "@/components/forms/image-url-input";
import TextInput from "@/components/forms/text-input";
import TextareaInput from "@/components/forms/textarea-input";

interface propsType{
    params: Promise<{mod_id: string}>
}

export default async function UpdateMod({params}: propsType){
    const {mod_id} = await params
    const mod = await getModById(mod_id)

    const updateModAction = updateMod.bind(null, mod_id)
    

    return (
        <div className="border-2 p-8 rounded-lg md:w-4/6 mx-auto">
            <h1 className="text-4xl mb-10">Edit game</h1>
            <form className="flex flex-col gap-4 items-stretch" action={updateModAction}>
                <TextInput label="Name" name="name" required defaultValue={mod?.name}/>
                <ImageUrlInput label="Image URL" name="imageUrl" defaultValue={mod?.imageUrl || ""}/>
                <TextareaInput label="Description" name="description"/>
                <input type="submit" className="bg-slate-100 p-2 w-fit rounded-md cursor-pointer mt-12 hover:bg-slate-300 focus:outline-gray-500" value="Save changes"/>
            </form>
        </div>
    )
}