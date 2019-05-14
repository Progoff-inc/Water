<?php
class BaseEntity{
    public $Id;
    public $Name;
    public $Description;
}

class App extends BaseEntity{
    public $Phone;
    public $Email;
    public $CreateDate;
}
    
class News extends BaseEntity{
    public $Image;
    public $CreateDate;
}
    
class Doc{
    public $Id;
    public $Name;
    public $Image;
    public $Type;
    public $Document;
}

class Prop{
    public $Id;
    public $Name;
    public $Value;
}
?>