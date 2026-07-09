import {Link} from "@inertiajs/react";

export default function FileCard({file}:{file:any}) {

    return(
        <div className={"w-max bg-cyan-200 rounded-lg flex flex-col justify-center"}>
            <div>
                {file.filename}
            </div>
            <a
                className={"bg-blue-600 w-full flex justify-center items-center text-xl text-white"}
                href={route('file.download',{id:file.id})}>
                Download
            </a>
        </div>

    );

}
