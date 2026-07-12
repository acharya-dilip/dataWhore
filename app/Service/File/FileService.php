<?php

namespace App\Service\File;

use App\Models\File;

class FileService
{

    public function all($id)
    {
        $files = File::where('user_id', $id)->get();
        return $files;
    }

}
