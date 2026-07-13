import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
 DialogTrigger} from "@/components/ui/dialog"
import UploadFileInputField from "@/Components/UploadFileInputField";
import {useForm} from "@inertiajs/react"; // 💡 Notice DialogTrigger is removed

interface UploadFileDialogProps {
    state: boolean;
    setState: (open: boolean) => void;
}

export default function UploadFileDialog({ state, setState }: UploadFileDialogProps) {

    interface UploadFormFields{
        filename: string;
        file: File | null;
    }

    const { data, setData,post} = useForm<UploadFormFields>({
        filename: "",
        file: null,
    });






    return (
        // 💡 onOpenChange allows the modal to toggle the state back to false when closed
        <Dialog
            open={state} onOpenChange={setState}>
            <DialogTrigger/>
            <DialogContent
                onInteractOutside={(e) => {
                    e.preventDefault();
                }}
                // onEscapeKeyDown={(e) => e.preventDefault()}

                className={"bg-gray-50"}>
                <DialogHeader>
                    <DialogTitle>Upload File</DialogTitle>
                    <DialogDescription>
                        Select a file from your computer to upload to the file manager.
                    </DialogDescription>
                </DialogHeader>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        post(route('file.store',{path : window.location.pathname.replace(/^\//, '')}),{
                            onSuccess: ()=> setState(false)
                        });

                    }}
                >
                    <div className={"flex flex-col gap-4"}>
                        <input
                            placeholder={"Rename Your File"}
                            value={data.filename}
                            onChange={(e)=>(setData("filename", e.target.value))}
                            name={"filename"}
                            className={"w-full p-2 border-2 border-gray-200 rounded-md text-2xl focus:border-none"}
                            type={"text"}

                        />
                        <UploadFileInputField

                            name={"file"}
                            required={true}
                            setData={setData}
                        />



                        <input
                            type={"submit"}
                            value={"Done"}
                            className={"bg-blue-600 text-white hover:bg-gray-200 hover:text-blue-600 py-2 w-full text-center text-2xl font-medium rounded-md "}
                            />
                    </div>
                </form>



            </DialogContent>
        </Dialog>
    );
}
