<?php

namespace Tests\Browser;

use Illuminate\Foundation\Testing\DatabaseMigrations;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class CreateTodoTest extends DuskTestCase
{
    /**
     * Test creating a new todo.
     */
    // public function test_create_todo(): void
    // {
    //     $this->browse(function (Browser $browser) {
    //         $browser->visit('/todos')
    //             ->type('.todo-input-field', 'Test Todo Item')
    //             ->press('Add')
    //             ->assertSee('Test Todo Item');
    //     });
    // }

    // /**
    //  * Test that verifies todos page shows the create button.
    //  */
    // public function test_see_todos(): void
    // {
    //     $this->browse(function (Browser $browser) {
    //         $browser->visit('/todos')
    //             ->assertPresent('.create-todo-button')
    //             ->assertSee('Add');
    //     });
    // }
}
