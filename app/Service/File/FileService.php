<?php

namespace App\Service\File;

use App\Models\File;

class FileService
{

    public function all($user_id,$folder_id)
    {
        $files = File::where([
            'user_id' => $user_id,
            'parent_folder_id' => $folder_id,
        ])->get();

        return $files;
    }

}
