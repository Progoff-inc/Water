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
    public $Phone;
    public $Address;
    public $Email;
}

class Vacancy{
    public $Id;
    public $Name;
    public $WorkTime;
    public $Salary;
    public $Duties;
    public $Requirements;
    public $Conditions;
    
}

class VacancyValue{
    public $Id;
    public $VacancyId;
    public $Name;
    public $Type;
    
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
    public $TypeId;
    public $Document;
}

class DocType{
    public $Id;
    public $Name;
    public $Info;
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