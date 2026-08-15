<?php

namespace App\Policies;

use App\Models\User;
use App\Models\Folder;
class FolderPolicy
{
    /**
     * Create a new policy instance.
     */
    public function __construct()
    {
        //
    }

    public function delete(User $user, Folder $folder){
        return $folder->user_id === $user->id;
    }
}
