<?php

namespace App\Service\File;

use App\Models\User;
use App\Models\File;
use Illuminate\Support\Facades\Storage;

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


    public function destroy($file){

        $username = User::where('id',$file->user_id)->first()->name;

        $deleted_file = $file->replicate()->setTable('deleted_files');

        Storage::disk('private')->move($file->filepath,$username.'/.deleted/'.$file->filename.'.'.$file->extension);
        $deleted_file->filepath = $username.'/.deleted/'.$file->filename;

        $deleted_file->save();
        $file->delete();


    }

}
