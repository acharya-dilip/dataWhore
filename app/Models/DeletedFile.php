<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DeletedFile extends Model
{
    protected $table = "deleted_file";

    protected $fillable = [
        'user_id',
        'filename',
        'file',
        'extension',
        'mime',
    ];

    public function User(){
        return $this->belongsTo(User::class);
    }



    protected $primaryKey = 'id';

    use HasFactory;


    //
}
