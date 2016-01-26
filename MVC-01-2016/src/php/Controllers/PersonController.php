<?php

namespace Project\Controllers;

use Framework\Controller;

use Projects\Models\Person;

class PersonController extends Controller
{
    public function indexAction()
    {
        // Retrieve all available persons
        $persons = Person::find();

        // Store the information for view rendering
        $this->view->persons = $persons;
    }

    public function createAction($name, $age, $weight, $height)
    {
        // Create new person
        $person = new Person($name, $age, $weight, $height);

        // Save new person
        $person->save();

        // Store the information for view rendering
        $this->view->person = $person;

        // Tell the view we're creating
        $this->view->action = 'create';

        // Render the edit view
        $this->view->render('views/edit.phtml');
    }

    public function readAction($id)
    {
        // Retrieve the person we're looking for
        $person = Persons::findById($id);

        // Store the information for view rendering
        $this->view->person = $person;

        // Tell the view we're editing
        $this->view->action = 'editing';

        // Render the edit view
        $this->view->render('views/edit');
    }

    public function updateAction($id, $name, $age, $weight, $height)
    {
        // Retrieve the person we're looking for
        $person = Persons::findById($id);

        // Update the person's information
        $person->set('name', $name);
        $person->set('age', $age);
        $person->set('weight', $weight);
        $person->set('height', $height);

        // Save the person
        $person->save();

        // Store the new information for view rendering
        $this->view->person = $person;

        // Tell the view we're editing
        $this->view->action = 'editing';

        // Render the edit view
        $this->view->render('views/edit');
    }

    public function deleteAction($id)
    {
        // Retrieve the person wer're looking for
        $person = Person::findById($id);

        // Delete the person
        $person->delete();

        // Redirect to person's listing
        $this->request->redirect(array(
            'controller' => 'person',
            'action' => 'index'
        ));
    }
}
