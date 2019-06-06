<?php
class BaseEntity{
    public $Id;
    public $Name;
    public $Description;
}
class Contact{
    public $Id;
    public $Head;
    public $Time;
    public $Boss;
    public $Tel;
    public $Address;
    public $Email;
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

class Rate{
    public $Id;
    public $Name;
    public $Type;
}

class Price{
    public $Id;
    public $PriceTypeId;
    public $DateStart;
    public $DateFinish;
    public $Price;
}
?>