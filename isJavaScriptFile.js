function isJavaScriptFile(fileName){
    let fileExtension = fileName.split('.').pop();

    if(fileExtension == 'js')
    {
        return true;
    }
    else{
        return false;
    }
}

let name='index.js';
isJavaScriptFile(name);