import {Link} from "@inertiajs/react";
import {ArrowDown, Cog, FileCog, LucideEye, Settings, Settings2Icon, TrashIcon} from "lucide-react";
import {useState} from "react";
import FilePreview from "@/Components/FilePreview";
import react from "@vitejs/plugin-react";

export default function FileCard({file}:{file:any}) {

    let filePreviewRender : any;

    if(file.mime.startsWith('image/')){
        filePreviewRender = (<img
            alt={"anImage"}
            className={" h-full w-full object-cover"}
            src={route('file.view', {id: file.id})}
        />)
    }else if(file.mime==="application/pdf" || file.mime.startsWith("text/") ) {
        filePreviewRender = (<iframe
            className={" h-full w-full bg-white border-none object-contain overflow-hidden pointer-events-none"}
            src={route('file.view', {id: file.id}) + "#toolbar=0&navpanes=0&scrollbar=0"}
            scrolling="no"
        />)
    }else if(file.mime.startsWith("application/")) {
        filePreviewRender = (<FileCog className={"w-1/5 h-auto text-gray-50"} />)
    }else if(file.mime.startsWith("video/")){
       filePreviewRender = ( <video
           className={" h-full w-full bg-white border-none object-cover overflow-hidden pointer-events-none"}
           src = {route('file.view', {id: file.id})}
       />)

    }



    return(
        <>
            <div className={"w-full bg-blue-600 rounded-lg h-max flex flex-col gap-2 items-center justify-end p-2 "}>
                <div className={"h-[25vh] w-full overflow-hidden flex justify-center"}>

                    {filePreviewRender}

                </div>
                <div className={"text-xl text-white flex justify-between w-full  "}>
                    <div className={" font-medium line-clamp-1 overflow-hidden"}>
                        {file.filename}.{file.extension}
                    </div>
                    <div className={"flex gap-2"}>
                        <a
                            href={route("file.destroy", {id: file.id})}
                            className={" bg-white h-max w-max p-2 rounded-full group hover:bg-red-600"}
                        >
                            <TrashIcon
                                className={"size-5 text-red-600 group-hover:text-white  rounded-full"}/>
                        </a>
                        <a
                            className={" bg-white h-max w-max p-2 rounded-full group hover:bg-green-600"}
                            href={route('file.download', {id: file.id})}
                        >
                            <ArrowDown
                                className={"size-5 text-green-600 group-hover:text-white  rounded-full"}/>
                        </a>
                    </div>
                </div>



            </div>
        </>

    );

}
