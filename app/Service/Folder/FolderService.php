<?php

namespace App\Service\Folder;

use App\Models\User;
use Illuminate\Support\Facades\Storage;

use App\Models\Folder;

class FolderService
{
    public function all($user_id,$folder_id)
    {
        $folders = Folder::where([
            'user_id' => $user_id,
            'parent_folder_id' => $folder_id,
        ])->get();
        return $folders;
    }

    public function destroy($folder){

                $username = User::where('id',$folder->user_id)->first()->name;

        $deleted_folder = $folder->replicate()->setTable('deleted_folders');

        Storage::disk('private')->move($folder->folderpath,$username.'/.deleted/'.$folder->filename);
        $deleted_folder->filepath = $username.'/.deleted/'.$folder->name;

        $deleted_folder->save();
        $folder->delete();



    }

}
