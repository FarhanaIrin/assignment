function publicBusFare(passenger){
    let bus= passenger / 50;
    let fileExtension = bus.split('.').pop();
   // let microbus = passenger - bus*50;
    console.log(fileExtension);
}

publicBusFare(117);