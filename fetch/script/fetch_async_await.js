const makeRequest = async (url, config)=>{
    const readableStream = await fetch(url, config);
    if(!readableStream.ok){
        const message = `Async await Error : ${res.status}`;
        throw new Error(message);
    }
    const convertToJson = await readableStream.json();
    return convertToJson;
}


const getData = ()=>{
    makeRequest("https://jsonplaceholder.typicode.com/posts")
        .then((res)=>{
            console.log(`Async Await Get Resourse:`);
            console.log(res);
        })
        .catch((error)=> console.log(error));
}
getData();


const sendData = ()=>{
    makeRequest("https://jsonplaceholder.typicode.com/posts", {  
        method: 'POST',          //creating new resourse
        body: JSON.stringify({
            title: 'foolish',
            body: 'bar-bar-boo',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
    })
        .then((res)=>{
            console.log(`Async Await Post Data:`);
            console.log(res);
        })
        .catch((error)=> console.log(error));
}
sendData();


const updatingData = ()=>{
    makeRequest("https://jsonplaceholder.typicode.com/posts/1", {  
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
    })
        .then((res)=>{
            console.log(`Async Await Updating Data:`);
            console.log(res);
        })
        .catch((error)=> console.log(error));
}
updatingData();


const updatingSingleData = ()=>{
    makeRequest("https://jsonplaceholder.typicode.com/posts/1", {  
        method: 'PATCH',          //updating resourse
        body: JSON.stringify({
          
            title: 'Happy! Happy! Sad? Sad/',
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
    })
        .then((res)=>{
            console.log(`Async Await Updating Single Data:`);
            console.log(res);
        })
        .catch((error)=> console.log(error));
}
updatingSingleData();



const deletingData = ()=>{
    makeRequest("https://jsonplaceholder.typicode.com/posts/1", {  
        method: 'DELETE',          ////delete resourse
    })
        .then((res)=>{
            console.log(`Async Await Data Deleted Successfully:`);
            console.log(res);
        })
        .catch((error)=> console.log(error));
}
deletingData();