import createMod from "@/actions/mods/create-mod";
import FileInput from "@/components/forms/file-input";
import TextInput from "@/components/forms/text-input";

export default function CreateModForm(){
    return (
        <div className="w-fit mx-auto">
            <h1 className="text-5xl">New mod</h1>
            <form className="flex flex-col mt-20 gap-5" action={createMod} >
                <TextInput label="Name" name="name"/>
                <TextInput label="Description" name="description"/>
                <FileInput label="File" name="file"/>
                <input className="bg-indigo-700 p-2 rounded-md cursor-pointer outline outline-indigo-700 outline-2 hover:bg-transparent hover:text-indigo-700" type="submit" value="Create"/>
            </form>
        </div>
    )
}