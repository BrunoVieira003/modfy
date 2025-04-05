import { getModById } from "@/actions/mod"
import Link from "next/link"
import { ReactNode } from "react"

interface propsType{
    children: ReactNode,
    params: Promise<{mod_id: string}>
}

export default async function ModPage(props: propsType){
    const params = await props.params
    const {children} = props
    const mod = await getModById(params.mod_id)
    const imageUrl = mod?.imageUrl || 'images/no-image.svg'

    return (
        <div>
            <div className="flex items-center gap-3 mb-5">
                <img src={imageUrl} className="object-contain w-32 h-32 self-center rounded-md" />
                <div>
                    <h1 className="text-4xl font-bold">{mod?.name}</h1>
                    <Link href={`/games/${mod?.game.slug}`} className="text-sm text-slate-400 hover:underline">{mod?.game.title}</Link>
                </div>
            </div>
            <h2 className="text-xl my-2">by Author name</h2>
            <a href="#files" className="border-b border-b-black font-bold text-sm">Go to files</a>
            <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ipsum ut fuga saepe, minima incidunt doloribus corporis facere expedita debitis unde, nisi eveniet illum libero accusantium! Perferendis cupiditate quia dolore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, a non. Quod, ipsa soluta. Eveniet magnam sit voluptate quas illum animi minima architecto aliquid, vel exercitationem, tempore alias nemo iste. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium aspernatur quae recusandae, rem perspiciatis, in ipsam quo architecto totam assumenda cumque ex reiciendis nobis nesciunt facilis provident unde fugit! Hic!</p>
            <h1 className="text-xl my-3" id="files">Files</h1>
            <table className="table-auto w-full border">
                <thead className="bg-slate-200">
                    <tr>
                        <th className="text-start text-lg p-4">Mod</th>
                        <th className="text-start text-lg p-4">Game Version</th>
                        <th className="text-start text-lg p-4">Version</th>
                        <th className="text-center text-lg p-4">Download</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="hover:bg-slate-100">
                        <td className="p-4">Mod name</td>
                        <td className="p-4">1.20.4</td>
                        <td className="p-4">v1.0.1</td>
                        <td className="p-4 text-center">
                            <button>
                                <img src="/icons/home.svg" className="h-6 w-6" />
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}