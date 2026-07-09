<?php

namespace App\Http\Controllers;

use App\Http\Requests\FileRequest;
use App\Models\File;
use Illuminate\Http\Request;

class FileController extends Controller
{

public function store(FileRequest $request){

    $file = new File;

    $file->filename = $request->filename;
    $file->user_id = $request->user()->id;
    $path = $request->file('file')->store('uploads', 'private');
    $file->filepath = $path;

    $file->save();

}


}
