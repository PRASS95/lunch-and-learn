<?php

namespace Project\Models;

class Person extends Model
{
    public $name = null;

    public $age = null;

    public $weigth = null;

    public $height = null;

    public function __construct($name, $age, $weight, $height)
    {
        // Create a new person
        $this->name = $name;
        $this->age = $age;
        $this->weight = $weight;
        $this->height = $height;
    }

    public function getBodyMassIndex()
    {
        // Calculate the body mass index
        return $this->weight / ($this->height * $this->height);
    }
}
