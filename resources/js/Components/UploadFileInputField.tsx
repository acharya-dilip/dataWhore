import {UploadIcon} from "lucide-react";
import {useRef, useState} from "react";

interface UploadFileInputFieldProps {
    required: boolean;
    name: string;
    setData: any;

}

export default function UploadFileInputField({required,name,setData}: UploadFileInputFieldProps){

    const fileRef = useRef<HTMLInputElement>(null);

    const [selectedFile, setSelectedFile]= useState<File | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        if(e.target.files && e.target.files.length > 0){
            setData('file',e.target.files[0]);
            setSelectedFile(e.target.files[0]);

        }
    }



    return(
        <div className={"w-full h-max flex flex-col gap-2 justify-center"}>
            <input
                name={name}
                ref={fileRef}
                className={"hidden"}
                type={"file"}
                required={required}
                onChange={handleFileChange}

            />
            <div
                onClick={()=>fileRef.current.click()}
                className={"border-2 group hover:bordfuller-blue-600 flex flex-col gap-4 justify-center items-center w-full py-10  border-blue-200 border-dotted rounded-lg"}>
                <div className={"bg-blue-100 group-hover:bg-blue-600 rounded-full flex items-center justify-center p-8 w-[5vw] aspect-square"}>
                    <UploadIcon className={" text-white size-8  font-extralight"}/>
                </div>

                {selectedFile ? (
                    <h1 className={"text-2xl text-blue-200 group-hover:text-blue-600"}>{selectedFile.name}</h1>
                ):(
                    <h1 className={"text-2xl text-blue-200 group-hover:text-blue-600"}>Upload Files</h1>
                )}


            </div>
        </div>
    );

}
