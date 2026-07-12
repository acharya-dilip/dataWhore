<?php

namespace App\Service\Folder;

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


}
