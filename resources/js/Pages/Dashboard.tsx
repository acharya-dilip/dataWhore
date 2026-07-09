import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import FileCard from "@/Components/FileCard";

export default function Dashboard({files}:{files:any}) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <h1 className={"text-5xl font-semibold leading-tight text-gray-800"}>
                        Welcome to the Dashboard!
                    </h1>
                    <p className={"text-lg text-gray-600 mt-4"}>
                        This is your dashboard where you can manage your files and settings.
                    </p>
                    <div className={"flex flex-col justify-center items-center w-full bg-white rounded-lg h-[70vh]"}>

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
