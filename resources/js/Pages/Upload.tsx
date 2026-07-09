import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import {Head} from "@inertiajs/react";
import UploadFileForm from "@/Components/UploadFileForm";

export default function Upload(){


    return(
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Upload
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className={"w-full bg-white mt-10 rounded-lg flex justify-center items-center h-[70vh]"}>
                <UploadFileForm />
            </div>
        </AuthenticatedLayout>

    );

}
