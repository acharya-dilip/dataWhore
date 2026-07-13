import {ArrowDown, FileCog, Folder, FolderIcon, TrashIcon} from "lucide-react";
import {Link} from "@inertiajs/react";

export default function FolderCard({folder,path}:{folder:any, path:any}){

    return(


        <div className={"w-full bg-gray-200 rounded-lg h-max flex flex-col gap-2 items-center justify-end p-2 "}>

            <div className={"text-xl text-black flex justify-between w-full  "}>
                <div className={" font-medium line-clamp-1 overflow-hidden"}>
                    {folder.name}
                </div>
                <div className={"flex gap-2"}>
                    <button
                        // onClick={()=>(post(route("file.destroy", {id: file.id})))}
                        className={" bg-white h-max w-max p-2 rounded-full group hover:bg-red-600"}
                    >
                        <TrashIcon
                            className={"size-5 text-red-600 group-hover:text-white  rounded-full"}/>
                    </button>
                    <a
                        className={" bg-white h-max w-max p-2 rounded-full group hover:bg-green-600"}
                        // href={route('file.download', {id: file.id})}
                    >
                        <ArrowDown
                            className={"size-5 text-green-600 group-hover:text-white  rounded-full"}/>
                    </a>
                </div>
            </div>
            <Link
                href={route('dashboard',{
                    path:path ? path+'/'+folder.name : folder.name,
                    folder_id: folder.id
                })}
                className={" h-[25vh] w-full bg-white overflow-hidden flex justify-center"}>
                <Folder className={"w-1/5 h-auto text-blue-600"} />
            </Link>
        </div>
    );
}
