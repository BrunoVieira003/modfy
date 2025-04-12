import DownloadButton from "@/components/ui/download-button";
import LinkButton from "@/components/ui/link-button";
import { ModEntry } from "@prisma/client";

export default function FilesTable({files}: {files: ModEntry[]}){
    return (
        <table className="table-auto w-full border">
            <thead className="bg-slate-200">
                <tr>
                    <th className="text-start text-lg p-4">Version</th>
                    <th className="text-start text-lg p-4">Game Version</th>
                    <th className="text-center text-lg p-4">Download</th>
                </tr>
            </thead>
            <tbody>
                {files.map(f => 
                <tr className="hover:bg-slate-100" key={f.id}>
                    <td className="p-4">{f.version}</td>
                    <td className="p-4">{f.gameVersion}</td>
                    <td className="p-4 text-center flex items-center justify-center gap-2">
                        <DownloadButton href={"/api/download/" + f.id}/>
                    </td>
                </tr>
                )}
            </tbody>
        </table>
    )
}