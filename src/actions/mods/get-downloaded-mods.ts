import { configDotenv } from "dotenv";
import fsp from 'fs/promises'
import fs from 'fs'
import SUPPORTED_FILE_EXTENSIONS from "@/config/supportedExtensions";
import path from "path";

configDotenv()

export async function getDownloadedMods() {
    const downloadsDir = String(process.env.DOWNLOADS_DIR)
    if(!fs.existsSync(downloadsDir)) throw new Error('Invalid downloads directory');

    try {
        const dirFiles = await fsp.readdir(downloadsDir, { withFileTypes: true })
        const mods = dirFiles
            .filter(f => f.isFile() && SUPPORTED_FILE_EXTENSIONS.some(ex => f.name.endsWith(ex)))
            .map(f => {return {filename: f.name, path: path.join(downloadsDir, f.name)} });
        
        return mods
    }catch(e){
        console.log(e)
        throw e
    }
}