import { configDotenv } from "dotenv";
import fsp from 'fs/promises'
import fs from 'fs'
import path from "path";
import readMetafile from "@/util/metafile/read-metafile";
import ModMetadata from "@/interfaces/mod-metadata";

configDotenv()

export async function getStoredMods() {
    const modsDir = String(process.env.DOWNLOADS_DIR)
    if(!fs.existsSync(modsDir)) throw new Error('Invalid downloads directory');

    try {
        const dirFiles = await fsp.readdir(modsDir, { withFileTypes: true })
        const files = dirFiles.filter(f => f.isFile() && f.name.endsWith(".meta"))
        const mods: object[] = []
        for(let f of files){
            const info = await readMetafile(path.join(modsDir,f.name))
            mods.push(info)
        }
        
        return mods as ModMetadata[]
    }catch(e){
        console.log(e)
        throw e
    }
}