<?php
require 'models.php';
class DataBase {
    //$this->db = new PDO('mysql:host=localhost;dbname=nomokoiw_portal;charset=UTF8','nomokoiw_portal','KESRdV2f');
    public $db;
    public function __construct()
    {
        //$this->db = new PDO('mysql:host=localhost;dbname=myblog;charset=UTF8','nlc','12345');
        $this->db = new PDO('mysql:host=localhost;dbname=ih654686_water;charset=UTF8','ih654686_ivan','M*WRpDl1');
        $this->db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);
    }

    public function uploadFile($l, $p, $pid, $files, $t){
        if($this->checkAdmin($l, $p)){
            $img=$this->getImage($pid, $t);
            if($img){
                $this->removeFile($img);
            }
            $url = "http://vdknf.ru/water/";
            $n = basename($t."_".$pid."_".$files['Data']['name']);
            //$tid=ucfirst($t)."Id";
            $tid="Id";
            $t .="s";
            $d = "Files/$n";
            if(file_exists("Files")){
                
                if(move_uploaded_file($files['Data']['tmp_name'], $d)){
                    $s = $this->db->prepare("UPDATE $t SET Image=? WHERE $tid=?");
                    $s->execute(array($url.$d, $pid));
                    return($url.$d);
                }else{
                    return($_FILES['Data']['tmp_name']);
                }
            }else{
                mkdir("Files");
                if(move_uploaded_file($files['Data']['tmp_name'], $d)){
                    $s = $this->db->prepare("UPDATE $t SET Image=? WHERE $tid=?");
                    $s->execute(array($url.$d, $pid));
                    return($url.$d);
                }else{
                    return($_FILES['Data']['tmp_name']);
                }
            }
            
            return false;
        }else{
            return null;
        }
    }

    public function getImage($id, $t){
        // $tid=ucfirst($t)."Id";
        $tid="Id";
        $t .="s";
        $s = $this->db->prepare("SELECT Image FROM $t WHERE $tid=?");
        $s->execute(array($id));
        return $s->fetch()['Image'];
    }

    private function genInsertQuery($ins, $t){
        $res = array('INSERT INTO '.$t.' (',array());
        $q = '';
        for ($i = 0; $i < count(array_keys($ins)); $i++) {
            $res[0] = $res[0].array_keys($ins)[$i].',';
            $res[1][]=$ins[array_keys($ins)[$i]];
            $q=$q.'?,';
            
        }
        $res[0]=rtrim($res[0],',');
        $res[0]=$res[0].') VALUES ('.rtrim($q,',').');';
        
        return $res;
        
    }
    private function genUpdateQuery($keys, $values, $t, $id){
        $res = array('UPDATE '.$t.' SET ',array());
        $q = '';
        for ($i = 0; $i < count($keys); $i++) {
            if($values[$i]!='now()'){
                $res[0] = $res[0].$keys[$i].'=?, ';
                $res[1][]=$values[$i];
            }
            else{
                $res[0] = $res[0].$keys[$i].'=now(), ';
            }
            
            
        }
        $res[0]=rtrim($res[0],', ');
        $res[0]=$res[0].' WHERE Id = '.$id;
        
        return $res;
        
    }
    
    private function removeFile($filelink){
        $path = explode('water/',$filelink);
        if($path[1]){
            unlink($path[1]);
        }
        
    }
    
    public function getNews($l){
        if($l == null){
            $l = 10;
        }
        
        $sth = $this->db->query("SELECT * FROM news ORDER BY CreateDate DESC LIMIT $l");
        $sth->setFetchMode(PDO::FETCH_CLASS, 'News');
        return $sth->fetchAll();
    }
    
    public function getQuestions($l){
        if($l == null){
            $l = 10;
        }
        
        $sth = $this->db->query("SELECT * FROM questions ORDER BY Id DESC LIMIT $l");
        $sth->setFetchMode(PDO::FETCH_CLASS, 'BaseEntity');
        return $sth->fetchAll();
    }

    public function getApps($l, $p){
        if($this->checkAdmin($l, $p)){
            $sth = $this->db->query("SELECT * FROM apps");
            $sth->setFetchMode(PDO::FETCH_CLASS, 'App');
            return $sth->fetchAll();
        }else{
            return null;
        }
    }

    public function getDocs(){
        $sth = $this->db->query("SELECT * FROM docs");
        $sth->setFetchMode(PDO::FETCH_CLASS, 'Doc');
        return $sth->fetchAll();
    }
    
    public function getImportantDocs(){
        $sth = $this->db->query("SELECT * FROM docs WHERE IsImportant=1");
        $sth->setFetchMode(PDO::FETCH_CLASS, 'Doc');
        return $sth->fetchAll();
    }

    public function getTypeDocs($types){
        $types = "('".implode("','",$types)."')";
        $sth = $this->db->prepare("SELECT * FROM docs WHERE Type IN ".$types);
        $sth->execute(array($type));
        $sth->setFetchMode(PDO::FETCH_CLASS, 'Doc');
        return $sth->fetchAll();
    }
    
    public function getProp($name){
        $sth = $this->db->prepare("SELECT * FROM props WHERE Name=? LIMIT 1");
        $sth->execute(array($name));
        $sth->setFetchMode(PDO::FETCH_CLASS, 'Prop');
        return $sth->fetch();
    }

    public function getProps(){
        $sth = $this->db->query("SELECT * FROM props");
        $sth->setFetchMode(PDO::FETCH_CLASS, 'Prop');
        return $sth->fetchAll();
    }
    
    public function getContacts(){
        $sth = $this->db->query("SELECT * FROM contacts");
        $sth->setFetchMode(PDO::FETCH_CLASS, 'Contact');
        $contacts =  [];
        while($r = $sth->fetch()){
            $r->Tel = $this->getContact($r->Id, 'phone');
            $r->Email = $this->getContact($r->Id, 'email');
            $r->Address = $this->getContact($r->Id, 'address');
            $contacts[] = $r;
        }
        return $contacts;
    }
    public function search($str){
        $search = [];
        $sth = $this->db->query("SELECT * FROM docs WHERE LOWER(Name) LIKE '%".strtolower($str)."%'");
        $sth->setFetchMode(PDO::FETCH_CLASS, 'Doc');
        $search[] = $sth->fetchAll();
        $sth = $this->db->query("SELECT * FROM pricetypes WHERE LOWER(Search) LIKE '%".strtolower($str)."%'");
        $sth->setFetchMode(PDO::FETCH_CLASS, 'Rate');
        $search[] = $sth->fetchAll();
        $sth = $this->db->query("SELECT * FROM news WHERE LOWER(Name) LIKE '%".strtolower($str)."%' OR LOWER(Description) LIKE '%".strtolower($str)."%'");
        $sth->setFetchMode(PDO::FETCH_CLASS, 'News');
        $search[] = $sth->fetchAll();
        $sth = $this->db->query("SELECT * FROM contacts WHERE LOWER(Head) LIKE '%".strtolower($str)."%' OR LOWER(Boss) LIKE '%".strtolower($str)."%'");
        $sth->setFetchMode(PDO::FETCH_CLASS, 'Contact');
        $contacts =  [];
        while($r = $sth->fetch()){
            $r->Tel = $this->getContact($r->Id, 'phone');
            $r->Email = $this->getContact($r->Id, 'email');
            $r->Address = $this->getContact($r->Id, 'address');
            $contacts[] = $r;
        }
        $search[] = $contacts;
        return $search;
    }
    public function getContact($id, $type){
        $sth = $this->db->prepare("SELECT * FROM contactvalues WHERE ContactId=? and Type=?");
        $sth->execute(array($id, $type));
        $sth->setFetchMode(PDO::FETCH_CLASS, 'ContactValue');
        $contacts = [];
        while($r = $sth->fetch()){
            $contacts[] = $r[3];
        }
        return $contacts;
    }
    
    public function getRates($type){
        $sth = $this->db->prepare("SELECT * FROM pricetypes WHERE Type=?");
        $sth->execute(array($type));
        $sth->setFetchMode(PDO::FETCH_CLASS, 'Rate');
        $rates =  [];
        while($r = $sth->fetch()){
            $r->Prices = $this->getPrices($r->Id);
            $rates[] = $r;
        }
        return $rates;
    }
    
    private function getPrices($id){
        $sth = $this->db->prepare("SELECT * FROM pricevalues WHERE PriceTypeId=?");
        $sth->execute(array($id));
        $sth->setFetchMode(PDO::FETCH_CLASS, 'Price');
        return $sth->fetchAll();
    }

    public function addApp($app){
        $res = $this->genInsertQuery($app,"apps");
        $s = $this->db->prepare($res[0]);
        if($res[1][0]!=null){
            $s->execute($res[1]);
            $tel = "Не указано";
            if($app['Phone']!=null){
                $tel=$app['Phone'];
            }
            $to = "<volik9925@yandex.ru>";
            $subject = $app['Topic'];
            $str = file_get_contents("appsMess.html");
            $str = str_replace ( '#name#' , $app['Name'], $str);
            $str = str_replace ( '#tel#' , $tel, $str);
            $str = str_replace ( '#text#' , $app['Description'], $str);
            $headers  = "Content-type: text/html; charset=utf-8 \r\n";
            $headers .= "From:".$app['Email']."\r\n";
            mail($to, $subject, $str, $headers);
        }
        return $this->db->lastInsertId();
    }

    public function addNews($l, $p, $new){
        if($this->checkAdmin($l, $p)){
            $res = $this->genInsertQuery($new,"news");
            $s = $this->db->prepare($res[0]);
            if($res[1][0]!=null){
                $s->execute($res[1]);
            }
            return $this->getNewsById($this->db->lastInsertId());
        }else{
            return null;
        }
    }
    
    public function addQuestion($l, $p, $new){
        if($this->checkAdmin($l, $p)){
            $res = $this->genInsertQuery($new,"questions");
            $s = $this->db->prepare($res[0]);
            if($res[1][0]!=null){
                $s->execute($res[1]);
            }
            return $this->db->lastInsertId();
        }else{
            return null;
        }
    }
    
    public function getNewsById($id){
        $s = $this->db->prepare("SELECT * FROM news WHERE Id=?");
        $s->execute(array($id));
        return $s->fetch();
    }

    public function updateProp($l, $p, $id, $v){
        if($this->checkAdmin($l, $p)){
            
            $s = $this->db->prepare("UPDATE props SET Value=? WHERE Id=?");
            $s->execute(array($v, $id));
            return $this->db->lastInsertId();
        }else{
            return null;
        }
    }

    public function updateQuestion($l, $p, $new){
        if($this->checkAdmin($l, $p)){
            $id = $new['Id'];
            unset($new['Id']);
            $a = $this->genUpdateQuery(array_keys($new), array_values($new), "questions", $id);
            $s = $this->db->prepare($a[0]);
            $s->execute($a[1]);
            return $a;
        }else{
            return false;
        }
    }
    
    public function updateNews($l, $p, $new){
        if($this->checkAdmin($l, $p)){
            $id = $new['Id'];
            unset($new['Id']);
            $a = $this->genUpdateQuery(array_keys($new), array_values($new), "news", $id);
            $s = $this->db->prepare($a[0]);
            $s->execute($a[1]);
            return $a;
        }else{
            return false;
        }
    }

    public function enterAdmin($l, $p){
        
        return $this->checkAdmin($l, $p);
    }

    private function checkAdmin($l, $p){
        
        $access = file("user.php"); 
        $login = trim($access[1]); 
        $passw = trim($access[2]); 
        if($l==$login && $p==$passw){
            return true;
        }else{
            return false;
        }
    }
    
}
?>