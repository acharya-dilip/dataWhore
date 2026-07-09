import {Link} from "@inertiajs/react";
import {LucideEye} from "lucide-react";
import {useState} from "react";
import FilePreview from "@/Components/FilePreview";

export default function FileCard({file}:{file:any}) {


    return(
        <>
            <div className={"w-full bg-cyan-200 rounded-lg h-max flex flex-col gap-2 justify-center p-2"}>
                <div className={"text-xl flex justify-between "}>
                    {file.filename}.{file.extension}
                    <img
                        alt={"anImage"}
                        className={"w-full h-full"}
                        src={route('file.view', {id: file.id})}
                    />
                    <Link href={"#"}>
                        <button
                        >
                            <LucideEye className={"inline-block hover:text-gray-400"}/>
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
