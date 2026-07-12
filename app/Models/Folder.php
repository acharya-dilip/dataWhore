<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Testing\Fluent\Concerns\Has;

class Folder extends Model
{
    //
    protected $table = 'folders';
    protected $primaryKey = 'id';

    protected $fillable = ['name','path','user_id', 'parent_folder_id'];

    use HasFactory;



}
