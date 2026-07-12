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


}
