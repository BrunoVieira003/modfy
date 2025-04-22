import { deleteMod, getModById } from "@/actions/mod"
import FilesTable from "@/components/files-table"
import { Tab, TabLink, Tabs } from "@/components/tabs"
import ActionButton from "@/components/ui/action-button"
import LinkButton from "@/components/ui/link-button"
import Link from "next/link"

interface propsType{
    params: Promise<{mod_id: string}>
}

export default async function ModPage(props: propsType){
    const params = await props.params
    const mod = await getModById(params.mod_id)
    const imageUrl = mod?.imageUrl || 'images/no-image.svg'

    const deleteAction = deleteMod.bind(null, params.mod_id)

    return (
        <div>
            <div className="flex items-center gap-3 mb-5">
                <img src={imageUrl} className="object-contain w-32 h-32 self-center rounded-md" />
                <div>
                    <h1 className="text-4xl font-bold">{mod?.name}</h1>
                    <Link href={`/games/${mod?.game.slug}`} className="text-sm text-slate-400 hover:underline">{mod?.game.title}</Link>
                    <div className="flex gap-2 mt-4">
                        <LinkButton href={`/mod/${mod?.id}/new_file`} iconSrc="/icons/plus.svg">New file</LinkButton>
                        <LinkButton href={`/mod/${mod?.id}/edit`} iconSrc="/icons/edit.svg">Edit</LinkButton>
                        <ActionButton action={deleteAction} text="Delete" iconSrc="/icons/delete.svg"/>
                    </div>
                </div>
            </div>
            <h2 className="text-xl my-2">by Author name</h2>

            <Tabs defaultTab="overview">
                <div className="flex gap-4">
                    <TabLink tabRef="overview">Overview</TabLink>
                    <TabLink tabRef="files">Files</TabLink>
                </div>
                <Tab tab="overview">
                    <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ipsum ut fuga saepe, minima incidunt doloribus corporis facere expedita debitis unde, nisi eveniet illum libero accusantium! Perferendis cupiditate quia dolore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, a non. Quod, ipsa soluta. Eveniet magnam sit voluptate quas illum animi minima architecto aliquid, vel exercitationem, tempore alias nemo iste. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium aspernatur quae recusandae, rem perspiciatis, in ipsam quo architecto totam assumenda cumque ex reiciendis nobis nesciunt facilis provident unde fugit! Hic!</p>
                </Tab>
            <Tab tab="files">
                <h1 className="text-xl my-3" id="files">Files</h1>
                {mod?.entries && <FilesTable files={mod.entries}/>}
            </Tab>
            </Tabs>
        </div>
    )
}