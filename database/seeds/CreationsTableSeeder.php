<?php

use Illuminate\Database\Seeder;

class CreationsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('creations')->truncate();
        factory(App\Creation::class, 40)->create();
    }
}
