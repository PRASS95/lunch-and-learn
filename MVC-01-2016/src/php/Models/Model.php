<?php

namespace Project\Models;

class Model extends \Framework\Model
{
    private $id = null;

    public function __get($name)
    {
        // Retrieve model property if it exists
        if(property_exists(get_class($this), $name)) {
            return $this->{$name};
        }
    }

    public function __set($name, $value)
    {
        // Change model property if it exists
        if(property_exists(get_class($this), $name)) {
            $this->{$name} = $value;
        }
    }
}
