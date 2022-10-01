function isBestFriend(friend1,friend2){
    
    if(friend1.batch == friend2.batch)
    {
        console.log('They are best friend');
    }
    else{
        console.log('Tara jan-e-dushman');
    }
}

let object1 = {
    name: 'rahim',
    age: 24,
    batch: '06-08'
}

let object2 = {
    name: 'karim',
    age:25,
    batch: '07-08'
}

isBestFriend(object1,object2);
//console.log(object2);