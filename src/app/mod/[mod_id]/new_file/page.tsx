import { createModEntry } from "@/actions/mod-entry";
import FileInput from "@/components/forms/file-input";
import TextInput from "@/components/forms/text-input";

interface propsType{
    params: Promise<{mod_id: string}>
}

export default async function NewFile({params}: propsType){
    const {mod_id} = await params
    const createModEntryAction = createModEntry.bind(null, mod_id)

    return (
        <div className="border-2 p-8 rounded-lg md:w-4/6 mx-auto">
            <h1 className="text-4xl mb-10">New file</h1>
            <form className="flex flex-col gap-4 items-stretch" action={createModEntryAction}>
                <TextInput label="Mod version" name="modVersion" required/>
                <TextInput label="Game version" name="gameVersion" required/>
                <FileInput label="File" name="file"/>
                <input type="submit" className="bg-slate-100 p-2 w-fit rounded-md cursor-pointer mt-12 hover:bg-slate-300 focus:outline-gray-500" value="Create"/>
            </form>
        </div>
    )
}