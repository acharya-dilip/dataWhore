import {Dialog, DialogContent, DialogHeader, DialogTrigger} from "@/components/ui/dialog";

export default function (props: any) {
    return (
        <Dialog>
          <DialogTrigger>

          </DialogTrigger>
          <DialogContent>
              <DialogHeader>
                  {props.filename + "." + props.extension}
              </DialogHeader>
          </DialogContent>
        </Dialog>
    );
}
