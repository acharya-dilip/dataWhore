import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog" // 💡 Notice DialogTrigger is removed

interface UploadFileDialogProps {
    state: boolean;
    setState: (open: boolean) => void;
}

export default function UploadFileDialog({ state, setState }: UploadFileDialogProps) {
    return (
        // 💡 onOpenChange allows the modal to toggle the state back to false when closed
        <Dialog
            open={state} onOpenChange={setState}>
            <DialogContent className={"bg-white"}>
                <DialogHeader>
                    <DialogTitle>Upload File</DialogTitle>
                    <DialogDescription>
                        Select a file from your computer to upload to the file manager.
                    </DialogDescription>
                </DialogHeader>

                {/* Your file input or upload form will go here */}

            </DialogContent>
        </Dialog>
    );
}
