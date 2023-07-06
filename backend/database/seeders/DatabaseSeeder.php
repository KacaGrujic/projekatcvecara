<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Order;
use App\Models\Arrangement;
use App\Models\User;
use App\Models\Category;
use App\Models\Flower;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        Order::truncate();
        User::truncate();
        Arrangement::truncate();
	    Category::truncate();
        Flower::truncate();

        $user =User::factory()->create();


       
        $flower1 = Flower::create([
            'name'=>'Ruza'
        ]);

        $flower2 = Flower::create([
            'name'=>"Orhideja"
        ]);
        $flower3 = Flower::create([
            'name'=>"Suncokret"
        ]);
        $flower4 = Flower::create([
            'name'=>"Gerber"
        ]);
        $flower5 = Flower::create([
            'name'=>"Ljiljan"
        ]);
        $flower6 = Flower::create([
            'name'=>"Lala"
        ]);

        $category1 = Category::create([
            'name'=>"Rodjendan"
        ]);


        $category2 = Category::create([
            'name'=>"Svadba"
        ]);

        $category3 = Category::create([
            'name'=>"Godisnjica"
        ]);

        $arrangement1 = Arrangement::create([
            'name' => "Buket ruza",
            'description' => "Buketi ruža pričaju čarobnu priču koja će opčiniti Vama dragu osobu.",
            'quantity' => 5,
            'price'=> 100,
            'url'=>"https://cvecar.com/wp-content/uploads/buket-25-ruza.jpg",
            'category_id' => $category3->category_id,
            'flower_id' => $flower1->flower_id
        ]);

    }
}
