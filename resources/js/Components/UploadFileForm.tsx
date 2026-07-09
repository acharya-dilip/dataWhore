import TextInput from "@/Components/TextInput";
import {useForm} from "@inertiajs/react";





export default function UploadFileForm(){

    interface UploadFormFields{
        filename: string;
        file: File | null;
    }

    const { data, setData,post} = useForm<UploadFormFields>({
        filename: "",
        file: null,
    });



    return(
        <div>
            <form
                onSubmit={(e) => {
                    e.preventDefault();

                    post(route('file.store'));
                }}
                action={route('file.store')}
            >
                <label
                    className={"text-lg"}
                >
                    File Name:
                </label>
                <div className={"w-full flex flex-col gap-2 justify-center"}>
                    <TextInput
                        required={true}
                        className={"p-2"}
                        type="string"
                        id={'filename'}
                        value={data.filename}
                        onChange={(e) => setData('filename', e.target.value)}
                        name={"filename"}
                    />?.[0]

                    <input
                        name={"file"}
                        type={"file"}
                        onChange={(e) => setData("file", e.target.files ? e.target.files[0] : null)}
                    />
                    <button
                        className={"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "}
                        type={"submit"}>
                        Submit
                    </button>
                </div>

            </form>

        </div>

    );

}
