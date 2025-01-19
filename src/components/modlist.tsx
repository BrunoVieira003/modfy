import { getDownloadedMods } from "@/actions/mods/get-downloaded-mods"

export default async function Modlist(){
    const mods = await getDownloadedMods()

    return (
        <div>
            <h1>Available mods</h1>
            <table className="table-fixed w-3/6 mx-auto">
                <thead>
                    <tr>
                        <th>Filename</th>
                        <th>Path</th>
                    </tr>
                </thead>
                <tbody>
                    {mods.map(m => 
                    <tr>
                        <td>{m.filename}</td>
                        <td>{m.path}</td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    )
}