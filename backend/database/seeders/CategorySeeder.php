<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $v1 = new Category();
        $v1->name="domace";
        $v1->save();

        $v2 = new Category();
        $v2->name="egzoticne";
        $v2->save();

        $v3 = new Category();
        $v3->name="americke";
        $v3->save();

        $v4 = new Category();
        $v4->name="evropske";
        $v4->save();

        $v5 = new Category();
        $v5->name="africke";
        $v5->save();

    
    }
}
