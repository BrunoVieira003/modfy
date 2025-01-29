import { getStoredMods } from "@/actions/mods/get-stored-mods"
import DownloadButton from "@/components/download-button"

export default async function Modlist(){
    const mods = await getStoredMods()

    return (
        <div className="my-10">
            <h1 className="text-3xl mb-4">Available mods</h1>
            <div className="w-3/5 mx-auto border border-indigo-950 rounded-md">
                <div className="grid grid-cols-4 bg-indigo-950 py-6 rounded-t-md px-3">
                    <p className="text-xl">Download</p>
                    <p className="text-xl">Filename</p>
                    <p className="text-xl col-span-2">Description</p>
                </div>
                <div >
                    {mods.map((m, i) =>
                    <div className="grid grid-cols-4 my-4 px-3" id={String(i)}>
                        <DownloadButton filePath={m.file} fileName={m.mod}/>
                        <p className="">{m.mod}</p>
                        <p className="truncate col-span-2">{m.description}</p>
                    </div>
                    )}
                </div>
            </div>
        </div>
    )
}