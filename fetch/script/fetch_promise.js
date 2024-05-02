// 4 ways to call api in JS -- xmlHttpREquest, fetch, axios, jquery

//fetch() has replace XMLHttpRequest
//fetch() - global method for making HTTP request[we do not need anythig to install in browser]
//2 way to call --> then,  async await


//+ fetch() easy to use compare to xmlhttprequest
//+ fetch return promise
//- returned promise can only handle network error
//- does not support all the older browser

 console.clear();
// console.log(window.fetch);

fetch('https://jsonplaceholder.typicode.com/posts') //api url, Getting resource
    // .then((res) => console.log(res)) //readablestream, sso we have to convert to json
    .then((res) =>{
        if(!res.ok){
            const message = `Error : ${res.status}`;
            throw new Error(message);
        }
        return res.json();
    }) //it will return another promise
    .then((res) =>{
        console.log(res);
        document.write(res);
    })
    .catch((error)=> console.log(error));


fetch('https://jsonplaceholder.typicode.com/posts', {  
    method: 'POST',          //creating new resourse
    body: JSON.stringify({
        title: 'foolish',
        body: 'bar-bar-boo',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
}) //api url, Creating a resource
    
    .then((res) =>{
        if(!res.ok){
            const message = `Error : ${res.status}`;
            throw new Error(message);
        }
        return res.json();
    }) //it will return another promise
    .then((res) =>{
        console.log(`New Data Added:${res}`);
        console.log(res);
        document.write(res);
    })
    .catch((error)=> console.log(error));


fetch('https://jsonplaceholder.typicode.com/posts/1', {  
    method: 'PUT',          //updating resourse
    body: JSON.stringify({
        id: 1,
        title: 'changed to original : foo',
        body: 'changed to original : bar',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
}) //api url, Creating a resource
    
    .then((res) =>{
        if(!res.ok){
            const message = `Error : ${res.status}`;
            throw new Error(message);
        }
        return res.json();
    }) //it will return another promise
    .then((res) =>{
        console.log(`Data Updated:${res}`);
        console.log(res);
        document.write(res);
    })
    .catch((error)=> console.log(error))


fetch('https://jsonplaceholder.typicode.com/posts/1', {  
    method: 'PATCH',          //patching resourse
    body: JSON.stringify({
        title: 'Happy! Happy!',
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
}) //api url, Creating a resource
    
    .then((res) =>{
        if(!res.ok){
            const message = `Error : ${res.status}`;
            throw new Error(message);
        }
        return res.json();
    }) //it will return another promise
    .then((res) =>{
        console.log(`Single Data Updated:${res}`);
        console.log(res);
        document.write(res);
    })
    .catch((error)=> console.log(error))

    

fetch('https://jsonplaceholder.typicode.com/posts/1', {  
    method: 'DELETE',          //delete resourse
}) //api url
        
    .then((res) =>{
        if(!res.ok){
            const message = `Error : ${res.status}`;
                throw new Error(message);
            }
            return res.json();
    }) //it will return another promise
    .then((res) =>{
        console.log(`Data Deleted Successfully:${res}`);
        console.log(res);
        document.write(res);
    })
    .catch((error)=> console.log(error))