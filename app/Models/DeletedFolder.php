<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DeletedFolder extends Model
{
    protected $table = 'deleted_folders';
    protected $primaryKey = 'id';//
    protected $fillable = ['name','user_id','parent_folder_id'];

    use HasFactory;

    public function User(){
        return $this->belongsTo(User::class);
    }

}
