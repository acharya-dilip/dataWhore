import TextInput from "@/Components/TextInput";

export default function UploadFileForm(){

    return(
        <div>
            <form
                action={"/upload"}
            >
                <label
                    className={"text-lg"}
                    htmlFor={"filename"}
                >
                    File Name: &nbsp;
                </label>
                <div className={"w-full flex flex-col gap-2 justify-center"}>
                    <TextInput
                        required={true}
                        className={"p-2"}
                        type="string"
                        id={'filename'}
                        name={"filename"}
                    />

                    <input
                        type={"file"}
                    />
                    <input
                        className={"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "}
                        type={"submit"}/>
                </div>

            </form>

        </div>

    );

}
