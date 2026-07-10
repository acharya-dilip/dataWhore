import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import FileCard from "@/Components/FileCard";
import {FilePlus, FolderPlus, UploadIcon} from "lucide-react";
import {useState} from "react";

export default function Dashboard({files}:{files:any}) {

    const [createFile, setCreateFile] = useState(false);
    const [createFolder, setCreateFolder] = useState(false);


    return (
        <AuthenticatedLayout
            header={
                <div className={"w-full flex justify-between"}>
                    <h2 className="text-2xl font-semibold leading-tight text-white">
                        File Manager
                    </h2>
                    <div className={"flex justify-between gap-4"}>
                        <button className={"bg-white p-2 text-green-600 rounded-md hover:bg-green-600 hover:text-white"}>
                            <UploadIcon />
                        </button>
                        <button className={"bg-white p-2 text-green-600 rounded-md hover:bg-green-600 hover:text-white"}>
                            <FolderPlus/>
                        </button>

                    </div>
                </div>
            }
        >
            <Head title="File Manager" />

            <div>
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">

                    <div className={"grid grid-cols-3 w-full mt-8 gap-4"}>

                        {files.map((file:any)=>(
                          <FileCard key={file.id} file={file}/>
                        ))

                        }

                    </div>



                </div>
            </div>
        </AuthenticatedLayout>
    );
}
