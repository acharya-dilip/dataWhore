<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DeletedFolder extends Model
{
    protected $table = 'delted_folders';
    protected $primaryKey = 'id';//
    protected $fillable = ['name','path','user_id','parent_folder_id'];

    use HasFactory;

    public function User(){
        return $this->belongsTo(User::class);
    }

}
