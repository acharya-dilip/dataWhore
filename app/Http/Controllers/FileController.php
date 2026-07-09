<?php

namespace App\Http\Controllers;

use App\Http\Requests\FileRequest;
use App\Models\File;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

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


public function all(Request $request){

    $files = File::where('user_id', $request->user()->id)->get();

    return Inertia::render('Dashboard', [
        'files' => $files,
    ]);


}

public function fetch(Request $request, $id){

    if(File::findorfail($id)->where('user_id', $request->user()->id)){
        return Storage::disk('private')->download('uploads/'.File::findorfail($id)->filepath);
    }else{
        return abort(403);
    }



}



}
