//built in browser object, therefore we no need to install anything

//console.log(window.XMLHttpRequest);

// event --> onload(), onerror()
//property --> response, responseText,  responseType, responseURL, status, statusText
//function --> open(), send(), setRequestHeader()

//http reques --> get, post, put, delet, patch 


const makeRequest = (method, url, receiveData) =>{

    const xhr = new XMLHttpRequest();
    //console.log(xhr);
    //document.write(xhr);

    xhr.open(method, url);       //request start or initialize 
                                // .... first  para-> method[get, post...] ; 
                                 //2nd para -- Api's url/address

    xhr.onload = () =>{

        let data = xhr.response; // jason format 
        document.write(xhr.status + "<br>"); 
        document.write(xhr.responseURL + "<br>"); 
        document.write(xhr.responseType + "<br>"); 
        console.log(JSON.parse(data)); 
        //document.write(`${JSON.parse(data)}`);
    }
    xhr.onerror = () =>{
        console.log("error found");
    }

    xhr.setRequestHeader('Content-Type', 'application/json'); //have to do betweent open & send
    xhr.send(JSON.stringify(receiveData)); //have to send json format data

}


const getData = ()=> {
  
    makeRequest('GET', 'https://jsonplaceholder.typicode.com/posts');
   
}
getData();


const sendData = ()=> {
  
    makeRequest('POST', 'https://jsonplaceholder.typicode.com/posts', {
        title: 'foo',
        body: 'bar',
        userId: 1,
    });
   
}
sendData();


const updateData = ()=> {
  
    makeRequest('PUT', 'https://jsonplaceholder.typicode.com/posts/1', {
        id: 1,
        title: 'foolish',
        body: 'empty',
        userId: 1,
    });
   
}
updateData();


const updateSingleData = ()=> {
  
    makeRequest('PATCH', 'https://jsonplaceholder.typicode.com/posts/1', {
        title: 'The Title Has changed to original : foo',
    });
   
}
updateSingleData();


const deleteData = ()=> {
  
    
    makeRequest('DELETE', 'https://jsonplaceholder.typicode.com/posts/1');
    console.log(`Data DELETED SUCCESSFULLY`)
   
}
deleteData();