<?php

namespace App\Http\Controllers\Folder;

use App\Http\Controllers\Controller;
use App\Models\Folder;
use Illuminate\Http\Request;

class FolderController extends Controller
{
    //
    public function index(Request $request){

        $folders = Folder::where('user_id',$request->user()->id)->get();

        return $folders;

    }

    public function create(Request $request, $path){
        $folder = new Folder();
        $parent = basename($path);
        if($parent==='dashboard'){
            $folder->parent_folder_id = 0;
        }else{
            $folder->parent_folder_id = Folder::where('name',$parent)->first()->id;
        }

        $folder->name = $request->name;
        $n = 1;
        While(Folder::where([
            'parent_folder_id'=>$folder->parent_folder_id,
            'name'=>$folder->name,
        ])->exists()){

            $folder->name = '('.$n.')'.$folder->name;
            $n++;

        }



        $folder->user_id = $request->user()->id;

        $folder->save();

    }


}
