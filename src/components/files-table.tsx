import DownloadButton from "@/components/ui/download-button";
import LinkButton from "@/components/ui/link-button";
import { ModEntry } from "@prisma/client";
import ActionButton from "./ui/action-button";
import { deleteModEntry } from "@/actions/mod-entry";

export default function FilesTable({files}: {files: ModEntry[]}){
    return (
        <table className="table-auto w-full border">
            <thead className="bg-slate-200">
                <tr>
                    <th className="text-start text-lg p-4">Version</th>
                    <th className="text-start text-lg p-4">Game Version</th>
                    <th className="text-center text-lg p-4">Download</th>
                    <th className="text-center text-lg p-4">Actions</th>
                </tr>
            </thead>
            <tbody>
                {files.map(f => 
                {
                const deleteAction = deleteModEntry.bind(null, f.id)

                return (
                    <tr className="hover:bg-slate-100" key={f.id}>
                        <td className="p-4">{f.version}</td>
                        <td className="p-4">{f.gameVersion}</td>
                        <td className="p-4 text-center">
                            <DownloadButton href={"/api/download/" + f.id}/>
                        </td>
                        <td className="p-4 text-center">
                            <ActionButton action={deleteAction} iconSrc="/icons/delete.svg"/>
                        </td>
                    </tr>
                )
                }
                )}
            </tbody>
        </table>
    )
}