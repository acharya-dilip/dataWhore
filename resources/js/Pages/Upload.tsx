import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import {Head} from "@inertiajs/react";

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

            <div className={"w-full bg-white rounded-lg "}>





            </div>
        </AuthenticatedLayout>

    );

}
