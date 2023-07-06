<?php

namespace Database\Seeders;

use App\Models\Order;
use App\Models\Flower;
use App\Models\User;
use App\Models\Category;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
      User::truncate();
      Category::truncate();
      Order::truncate();
      Flower::truncate();


      $admin = new User();
      $admin->name="Admin";
      $admin->email="admin@gmail.com";
      $admin->password= Hash::make("admin");
      $admin->admin = 1;
      $admin->save();
      User::factory(10)->create();

      $c = new CategorySeeder(); 
      $c->run();

      $f = new FlowerSeeder();
      $f->run();
    }
}
