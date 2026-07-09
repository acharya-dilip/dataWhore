import {Dialog, DialogContent, DialogHeader, DialogTrigger} from "@/components/ui/dialog";


interface FilePreviewProps{
    state: boolean;
    filename: string;
    file: File | null;
    mime: string;
}
export default function ({file}:{file:FilePreviewProps}) {
    return (
        <Dialog>
          <DialogTrigger>

          </DialogTrigger>
          <DialogContent>
              <DialogHeader>
                  {file.filename}
              </DialogHeader>
          </DialogContent>
        </Dialog>
    );
}
