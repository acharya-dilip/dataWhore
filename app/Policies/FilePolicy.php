<?php

namespace App\Policies;

use App\Models\File;
use App\Models\User;
use Illuminate\Http\Request;

class FilePolicy
{
    /**
     * Create a new policy instance.
     */
    public function __construct()
    {
        //
    }

    public function delete(User $user, File $file){
        return $file->user_id === $user->id;
    }



}
