<?php
require 'repository.php';
header("Access-Control-Allow-Origin: *"); 
header("Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization");

$ctxt = new DataBase();
if(isset($_GET['Key']))
{
    
    switch ($_GET['Key']) {
        case 'get-news':
            echo json_encode($ctxt->getNews($_GET['Limit']));
            break;
        case 'get-docs':
            echo json_encode($ctxt->getDocs());
            break;
        case 'get-apps':
            echo json_encode($ctxt->getApps($_GET['Login'], $_GET['Password']));
            break;
        case 'get-contacts':
            echo json_encode($ctxt->getContacts());
            break;
        case 'get-important-docs':
            echo json_encode($ctxt->getImportantDocs());
            break;
        case 'get-type-docs':
            $b = json_decode(file_get_contents('php://input'), true);
            echo json_encode($ctxt->getTypeDocs($b));
            break;
        case 'get-prop':
            echo json_encode($ctxt->getProp($_GET['Name']));
            break;
        case 'get-rates':
            echo json_encode($ctxt->getRates($_GET['Type']));
            break;
        case 'get-props':
            echo json_encode($ctxt->getProps());
            break;
        case 'add-app':
            $b = json_decode(file_get_contents('php://input'), true);
            echo json_encode($ctxt->addApp($b));
            break;
        case 'add-news':
            $b = json_decode(file_get_contents('php://input'), true);
            echo json_encode($ctxt->addNews($_GET['Login'], $_GET['Password'], $b));
            break;
        case 'enter-admin':
            echo json_encode($ctxt->enterAdmin($_GET['Login'], $_GET['Password']));
            break;
        case 'update-prop':
            echo json_encode($ctxt->updateProp($_GET['Login'], $_GET['Password'], $_GET['Id'], $_GET['Value']));
            break;
        case 'update-news':
            $b = json_decode(file_get_contents('php://input'), true);
            echo json_encode($ctxt->updateNews($_GET['Login'], $_GET['Password'], $b));
            break;
        case 'upload-file':
            $inp = json_decode(file_get_contents('php://input'), true);
            echo json_encode(array($ctxt->uploadFile($_GET['Login'], $_GET['Password'], $_GET['Id'], $_FILES, $_GET['Type'])));
            break;
        
        default:
            echo "Введенный ключ несуществует";
        
    }
    
}
else
{  
    echo "Введенные данные некорректны";
}
?>