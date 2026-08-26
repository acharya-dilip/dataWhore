<?php

namespace App\Http\Controllers\File;

use App\Http\Controllers\Controller;
use App\Http\Requests\FileRequest;
use App\Service\File\FileService;
use App\Models\File;
use App\Models\Folder;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Inertia\Inertia;

class FileController extends Controller
{
    public function __construct(
        protected FileService $fileService
    )
{
}
public function store(FileRequest $request, $path){

    $file = new File;
    //$path = $request->query('path');
    $folder_id = $request->query('folder_id');
    if($path==='/dashboard'){
        $path = '';
    }
    if($request->filename === null){
        $name = pathinfo($request->file->getClientOriginalName(),PATHINFO_FILENAME);
    }else{
        $name = $request->filename;
    }
    $filename = $name;
    $n = 1;
    While(File::where([
        'parent_folder_id'=>$folder_id,
        'filename'=>$filename,
        ])->exists()){

        $filename= $name.'('.$n.')';
        $n++;

    }

    $file->filename = $filename;



    $file->user_id = $request->user()->id;
    $username = User::where('id',$file->user_id)->first()->name;
    $file->extension = $request->file('file')->getClientOriginalExtension();
    $file->mime = $request->file('file')->getClientMimeType();
    $file->parent_folder_id = $folder_id;

    $path = $request->file('file')->storeAs($username.$path, $file->filename.".".$file->extension);
    $file->filepath = $path ;




    $file->save();

}


public function destroy($id)
{
    $file = File::where('id',$id)->firstorfail();
    Gate::authorize('delete', $file);

    $this->fileService->destroy($file);


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
