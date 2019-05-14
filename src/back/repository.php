<?php
require 'models.php';
class DataBase {
    //$this->db = new PDO('mysql:host=localhost;dbname=nomokoiw_portal;charset=UTF8','nomokoiw_portal','KESRdV2f');
    public $db;
    public function __construct()
    {
        //$this->db = new PDO('mysql:host=localhost;dbname=myblog;charset=UTF8','nlc','12345');
        $this->db = new PDO('mysql:host=localhost;dbname=nomokoiw_poff;charset=UTF8','nomokoiw_poff','ms87%L39');
        $this->db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);
    }

    public function uploadFile($l, $p, $pid, $files, $t){
        if($this->checkAdmin($l, $p)){
            $img=$this->getImage($pid, $t);
            if($img){
                $this->removeFile($img);
            }
            $url = "http://client.nomokoiw.beget.tech/water/";
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
        $res[0]=$res[0].' WHERE '.rtrim($t,'s').'Id = '.$id;
        
        return $res;
        
    }
    
    private function removeFile($filelink){
        $path = explode('water/',$filelink);
        unlink($path[1]);
        
    }
    
    public function getNews(){
        $sth = $this->db->query("SELECT * FROM news");
        $sth->setFetchMode(PDO::FETCH_CLASS, 'News');
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

    public function getTypeDocs($type){
        $sth = $this->db->prepare("SELECT * FROM docs WHERE Type=?");
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

    public function addApp($app){
        $res = $this->genInsertQuery($app,"apps");
        $s = $this->db->prepare($res[0]);
        if($res[1][0]!=null){
            $s->execute($res[1]);
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
            return $this->db->lastInsertId();
        }else{
            return null;
        }
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