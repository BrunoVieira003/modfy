'use client'

import { FiDownload } from 'react-icons/fi'

interface DownloadButtonProps{
    filePath: string
    fileName: string
}


export default function DownloadButton(props: DownloadButtonProps){
    const {filePath, fileName} = props

    return (
        <a href={"/api/download?file=" + filePath} download={fileName} className='h-full w-fit mx-auto'>
            <FiDownload className='text-center w-7 h-full hover:text-indigo-800'/>
        </a>
    )
}