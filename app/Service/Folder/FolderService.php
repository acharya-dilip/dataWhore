<?php

namespace App\Service\Folder;

use App\Models\User;
use Illuminate\Support\Facades\Storage;
use App\Models\File;
use App\Models\Folder;
use App\Service\File\Fileservice;
class FolderService
{
    public function __construct(
        protected FileService $fileService,
        protected FolderService $folderService,
    ){}


    public function all($user_id,$folder_id)
    {
        $folders = Folder::where([
            'user_id' => $user_id,
            'parent_folder_id' => $folder_id,
        ])->get();
        return $folders;
    }

    public function destroy($folder, $path=null){


        $files = File::where(['parent_folder_id'=> $folder->id])->get();
        $childFolders = Folder::where(['parent_folder_id'=>$folder->id])->get();
        foreach($files as $file){
           $this->fileService->destroy($file,$folder->name);
        }
        foreach($childFolders as $childFolder){
            $this->folderService->destroy($childFolder,$folder->name);
        }

        $deleted_folder = $folder->replicate()->setTable('deleted_folders');



        $deleted_folder->save();
        $folder->delete();



    }


}
