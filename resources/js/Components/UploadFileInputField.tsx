import {UploadIcon} from "lucide-react";
import {useRef} from "react";

export default function UploadFileInputField(){

    const fileRef = useRef<HTMLInputElement>(null);



    return(
        <div className={"w-full h-max flex flex-col gap-2 justify-center"}>
            <input
                ref={fileRef}
                className={"hidden"}
                type={"file"}
            />
            <button
                onClick={()=>fileRef.current.click()}
                className={"border-2 group hover:border-blue-600 flex flex-col gap-4 justify-center items-center w-full aspect-square  border-blue-200 border-dotted rounded-lg"}>
                <div className={"bg-blue-100 group-hover:bg-blue-600 rounded-full flex items-center justify-center p-8 w-[5vw] aspect-square"}>
                    <UploadIcon className={" text-white w-full h-full  font-extralight"}/>
                </div>
                <h1 className={"text-2xl text-blue-200 group-hover:text-blue-600"}>Upload Files</h1>

            </button>
        </div>
    );

}
