<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Flower;

class FlowerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Flower::create(['image'=>'https://www.sportvision.rs/files/thumbs/files/watermark/files/images/slike_proizvoda/media/DD9/DD9294-001/images/thumbs_w/thumbs_800/DD9294-001_w_800_800px.jpg', 'name'=>'Flower1', 'price'=>6500, 'quantity'=>0, 'category'=>1,'description'=>'asd']);
        Flower::create(['image'=>'https://www.sportvision.rs/files/thumbs/files/watermark/files/images/slike_proizvoda/media/DQ5/DQ5558-503/images/thumbs_w/thumbs_800/DQ5558-503_2_w_800_800px.jpg', 'name'=>'Flower2',   'price'=>6300, 'quantity'=>0, 'category'=>2,'description'=>'gdgd']);
        Flower::create(['image'=>'https://www.sportvision.rs/files/thumbs/files/watermark/files/images/slike_proizvoda/media/DH4/DH4073-010/images/thumbs_w/thumbs_800/DH4073-010_w_800_800px.jpg', 'name'=>'Flower3',   'price'=>16000, 'quantity'=>0, 'category'=>3,'description'=>'grge']);
        Flower::create(['image'=>'https://www.sportvision.rs/files/thumbs/files/watermark/files/images/slike_proizvoda/media/656/656927/images/thumbs_w/thumbs_800/656927_w_800_800px.jpg', 'name'=>'Flower4',   'price'=>2700, 'quantity'=>0, 'category'=>4,'description'=>'abrn']);
        Flower::create(['image'=>'https://www.sportvision.rs/files/thumbs/files/watermark/files/images/slike_proizvoda/media/NF0/NF0A7X2KJK31/images/thumbs_w/thumbs_800/NF0A7X2KJK31_w_800_800px.jpg', 'name'=>'Flower5',   'price'=>4990, 'quantity'=>0, 'category'=>5,'description'=>'tsjrj']);
        Flower::create(['image'=>'https://www.sportvision.rs/files/thumbs/files/watermark/files/images/slike_proizvoda/media/IC6/IC6755/images/thumbs_w/thumbs_800/IC6755_w_800_800px.jpg', 'name'=>'Flower6',   'price'=> 8000, 'quantity'=>0, 'category'=>3,'description'=>'srtjse']);
        Flower::create(['image'=>'https://www.sportvision.rs/files/thumbs/files/watermark/files/images/slike_proizvoda/media/369/369144-01/images/thumbs_w/thumbs_800/369144-01_w_800_800px.jpg', 'name'=>'Flower7',   'price'=> 8000, 'quantity'=>0, 'category'=>1,'description'=>'hsreher']);


    }
}
