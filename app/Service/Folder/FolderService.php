<?php

namespace App\Service\Folder;

use App\Models\Folder;

class FolderService
{
    public function all($id)
    {
        $folders = Folder::where('user_id', $id)->get();
        return $folders;
    }


}
