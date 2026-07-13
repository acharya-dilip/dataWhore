<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\Folder;
use Illuminate\Http\Request;
use App\Service\File\FileService;
use App\Service\Folder\FolderService;
use Inertia\Inertia;


class DashboardController extends Controller
{



    public function __construct(
        protected FileService $fileService,
        protected FolderService $folderService)
    {

    }
    public function index(Request $request, $folder_id = 0, $path = null){

//        if($path){
//            $slugs = explode('/', $path);
//            $folder_id = end($slugs);
//        }else{
//            $folder_id = 0;
//        }

        $files = $this->fileService->all($request->user()->id, $folder_id);
        $folders = $this->folderService->all($request->user()->id,$folder_id);

        return Inertia::render('Dashboard', [
            'files' => $files,
            'folders' => $folders,
        ]);


    }


}
