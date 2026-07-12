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

    public function create(Request $request, $parent){
        $folder = new Folder();
        if($parent==='dashboard'){
            $folder->parent_folder_id = 0;
        }else{
            $folder->parent_folder_id = Folder::findorfail('name',$parent)->id;
        }

        $folder->name = $request->name;
        $folder->user_id = $request->user()->id;

        $folder->save();

    }


}
