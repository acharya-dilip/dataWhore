import {Link} from "@inertiajs/react";
import {ArrowDown, LucideEye, TrashIcon} from "lucide-react";
import {useState} from "react";
import FilePreview from "@/Components/FilePreview";

export default function FileCard({file}:{file:any}) {

    console.log(route('file.view', {id: file.id}))


    return(
        <>
            <div className={"w-full bg-cyan-200 rounded-lg h-max flex flex-col gap-2 items-center justify-end p-2"}>
                <div className={"h-[25vh] w-full overflow-hidden"}>

                    {file.mime.startsWith('image/') && (
                        <img
                            alt={"anImage"}
                            className={" h-full w-full"}
                            src={route('file.view', {id: file.id})}
                        />
                    )}
                    {(file.mime==="application/pdf" || file.mime.startsWith("text/")) &&(
                        <iframe
                            className={" h-full w-full bg-white border-none overflow-hidden pointer-events-none"}
                            src={route('file.view', {id: file.id})+"#toolbar=0&navpanes=0&scrollbar=0"}
                            scrolling="no"
                        />
                    )

                    }

                </div>
                <div className={"text-xl flex justify-between w-full  "}>
                    <div>
                        {file.filename}.{file.extension}
                    </div>
                    <div className={"flex gap-2"}>
                        <button
                            className={" bg-white p-2 rounded-full group hover:bg-red-600"}
                        >
                            <TrashIcon
                                className={"size-5 text-red-600 group-hover:text-white  rounded-full"}/>
                        </button>
                        <a
                            className={" bg-white p-2 rounded-full group hover:bg-green-600"}
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
