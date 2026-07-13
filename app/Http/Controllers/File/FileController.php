<?php

namespace App\Http\Controllers\File;

use App\Http\Controllers\Controller;
use App\Http\Requests\FileRequest;
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

public function store(FileRequest $request,$path){

    $file = new File;

    $parent = basename($path);



    if($request->filename === null){
        $file->filename = pathinfo($request->file->getClientOriginalName(),PATHINFO_FILENAME);
    }else{
        $file->filename = $request->filename;
    }

    if($parent==='dashboard'){
        $file->parent_folder_id = 0;
        $path = "";
    }else{
        $file->parent_folder_id = $parent;

        $slugs = explode('/',$path);
        array_shift($slugs);
        foreach($slugs as &$slug){
            $slug = Folder::where('id',$slug)->firstorfail()->name;
        }unset($slug);
        $path = implode('/',$slugs);

    }
    $n = 1;
    While(File::where([
        'parent_folder_id'=>$file->parent_folder_id,
        'filename'=>$file->filename,
        ])->exists()){

        $file->filename = '('.$n.')'.$file->filename;
        $n++;

    }





    $file->user_id = $request->user()->id;
    $username = User::where('id',$file->user_id)->first()->name;
    $file->extension = $request->file('file')->getClientOriginalExtension();
    $file->mime = $request->file('file')->getClientMimeType();


    $path = $request->file('file')->storeAs($username.'/'.$path, $file->filename.".".$file->extension);
    $file->filepath = $path;




    $file->save();

}


public function destroy($id)
{
    $file = File::where('id',$id)->firstorfail();
    $username = User::where('id',$file->user_id)->first()->name;
    Gate::authorize('delete', $file);

    $deleted_file = $file->replicate()->setTable('deleted_files');

    Storage::disk('private')->move($file->filepath,$username.'/.deleted/'.$file->filename.'.'.$file->extension);
    $deleted_file->filepath = $username.'/.deleted/'.$file->filename;

    $deleted_file->save();
    $file->delete();

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
