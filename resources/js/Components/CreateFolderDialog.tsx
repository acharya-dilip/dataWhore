import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription
} from "@/components/ui/dialog";
import {useForm} from "@inertiajs/react";


interface FolderFormFields{
    name: string;
}

interface CreateFolderDialogProps {
    state: boolean;
    setState: (open: boolean) => void;
}

export default function CreateFolderDialog({ state, setState }: CreateFolderDialogProps) {


    const {data,setData,post} = useForm<FolderFormFields>({
            name: "",
    });

    return(
        <Dialog>
            <DialogTrigger/>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Create Folder</DialogTitle>
                    <DialogDescription>
                        Create a folder in your file manager.
                    </DialogDescription>
                </DialogHeader>
                <form>
                    <div className={"flex flex-col gap-4"}>
                        <input
                        placeholder={"Rename Your File"}
                        value={data.name}
                        onChange={(e) => (setData("name", e.target.value))}
                        name={"filename"}
                        className={"w-full p-2 border-2 border-gray-200 rounded-md text-2xl focus:border-none"}
                        type={"text"}

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
