<?php

namespace App\Http\Controllers;

use App\Http\Requests\FileRequest;
use App\Models\File;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class FileController extends Controller
{

public function store(FileRequest $request){

    $file = new File;

    if($request->filename === null){
        $file->filename = pathinfo($request->file->getClientOriginalName(),PATHINFO_FILENAME);
    }else{
        $file->filename = $request->filename;
    }
    $file->user_id = $request->user()->id;
    $username = User::where('id',$file->user_id)->first()->name;
    $path = $request->file('file')->store($username, 'private');
    $file->filepath = $path;
    $file->extension = $request->file('file')->getClientOriginalExtension();
    $file->mime = $request->file('file')->getClientMimeType();

    $file->save();

}


public function all(Request $request){

    $files = File::where('user_id', $request->user()->id)->get();

    return Inertia::render('Dashboard', [
        'files' => $files,
    ]);


}

public function fetch(Request $request, $id){
    $file = File::where('user_id', $request->user()->id)->where('id', $id)->firstOrFail();

        return Storage::disk('private')->download('/'.$file->filepath, $file->filename.'.'.$file->extension);

}

public function view(Request $request, $id)
{
    $file = File::where('user_id', $request->user()->id)->where('id', $id)->firstOrFail();

    return Storage::disk('private')->response('/' . $file->filepath);
}




}
