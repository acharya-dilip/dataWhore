import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, Link} from '@inertiajs/react';
import FileCard from "@/Components/FileCard";
import {FilePlus, FolderPlus, UploadIcon} from "lucide-react";
import {useState} from "react";
import UploadFileDialog from "@/Components/UploadFileDialog";
import CreateFolderDialog from "@/Components/CreateFolderDialog";
import FolderCard from "@/Components/FolderCard";

export default function Dashboard({files,folders}:{files:any,folders:any}) {

    const [createFile, setCreateFile] = useState(false);
    const [createFolder, setCreateFolder] = useState(false);


    return (
        <AuthenticatedLayout
            header={
                <div className={"w-full flex justify-between "}>
                    <Link
                        href={route('dashboard')}
                        className="text-2xl font-semibold leading-tight text-white hover:text-gray-200">
                        File Manager
                    </Link>
                    <div className={"flex justify-between gap-4 "}>
                        <button
                            onClick={()=>setCreateFile(true)}
                            className={"bg-white p-2 text-green-600 rounded-md hover:bg-green-600 hover:text-white"}>
                            <UploadIcon />
                        </button>
                        <button
                            onClick={()=>setCreateFolder(true)}
                            className={"bg-white p-2 text-green-600 rounded-md hover:bg-green-600 hover:text-white"}>
                            <FolderPlus/>
                        </button>

                    </div>
                </div>
            }
        >

            <UploadFileDialog state={createFile} setState={setCreateFile}/>
            <CreateFolderDialog state={createFolder} setState={setCreateFolder} />

            <Head title="File Manager" />

            <div>
                <div className="md:mx-auto mx-4 max-w-7xl sm:px-6 lg:px-8 ">

                    <div className={"grid md:grid-cols-3 w-full mt-8 gap-4 "}>

                        { folders.map((folder:any)=>(
                            <FolderCard folder={folder}  key={folder.id}/>
                            ))
                        }
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
