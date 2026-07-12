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
    public function index(Request $request, $path = null){

        if($path){
            $slugs = explode('/', $path);
            $parent_id = Folder::where('name', end($slugs))->first()->id;
        }else{
            $folder_id = 0;
        }

        $files = $this->fileService->all($request->user()->id);
        $folders = $this->folderService->all($request->user()->id);

        return Inertia::render('Dashboard', [
            'files' => $files,
            'folders' => $folders,
        ]);


    }


}
