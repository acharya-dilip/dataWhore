<?php

namespace App\Http\Controllers;

use App\Models\Folder;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FolderController extends Controller
{
    //
    public function index(Request $request){

        $folders = Folder::where('user_id',$request->user()->id)->get();

        return $folders;

    }


}
