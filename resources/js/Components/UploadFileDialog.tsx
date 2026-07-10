import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
 DialogTrigger} from "@/components/ui/dialog"
import UploadFileInputField from "@/Components/UploadFileInputField"; // 💡 Notice DialogTrigger is removed

interface UploadFileDialogProps {
    state: boolean;
    setState: (open: boolean) => void;
}

export default function UploadFileDialog({ state, setState }: UploadFileDialogProps) {
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

                className={"bg-white"}>
                <DialogHeader>
                    <DialogTitle>Upload File</DialogTitle>
                    <DialogDescription>
                        Select a file from your computer to upload to the file manager.
                    </DialogDescription>
                </DialogHeader>
                <form>
                    <div className={"flex flex-col gap-4"}>
                        <UploadFileInputField/>
                        <button className={"bg-blue-600 text-white w-full text-center text-2xl font-semibold rounded-md "}>
                            Upload

                        </button>
                    </div>
                </form>



            </DialogContent>
        </Dialog>
    );
}
