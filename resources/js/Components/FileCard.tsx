import {Link} from "@inertiajs/react";
import {LucideEye, TrashIcon} from "lucide-react";
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
                    {file.mime==="application/pdf" &&(
                        <iframe
                            className={" h-full w-full border-none overflow-hidden pointer-events-none"}
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
                    <Link href={"#"}>
                        <button
                            className={"p-2 bg-white rounded-full group hover:bg-red-600"}
                        >
                            <TrashIcon className={"inline-block size-7 text-red-600 group-hover:text-white  rounded-full"}/>
                        </button>
                    </Link>
                </div>

                <a
                    className={"bg-blue-600 hover:bg-blue-800 w-full rounded-lg  flex justify-center items-center text-xl text-white"}
                    href={route('file.download', {id: file.id})}>
                    Download
                </a>


            </div>
        </>

    );

}
