<?php

namespace Tests\Browser;

use Illuminate\Foundation\Testing\DatabaseMigrations;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class ExampleTest extends DuskTestCase
{
    /**
     * Test to verify todos page loads and shows the create button.
     */
    public function test_see_todos(): void
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/todos')
                ->assertPathIs('/todos')
                ->waitForText('Todo List');
        });
    }

    /**
     * A basic browser test example.
     */
    public function test_see(): void
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/todos')
                ->waitFor('.create-todo-button');
        });
    }

    /**
     * Test to create a new todo.
     */
    public function test_create_todo(): void
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/todos')
                ->type('.todo-input-field', 'Test Todo Item')
                ->press('Add')
                ->assertSee('Test Todo Item');
        });
    }

    /**
     * Test to delete a todo.
     */
    public function test_delete_todo(): void
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/todos')
                ->type('.todo-input-field', 'Test Todo Item')
                ->press('Add')
                ->assertSee('Test Todo Item')
                ->press('X')
                ->assertDontSee('Test Todo Item');
        });
    }
}
