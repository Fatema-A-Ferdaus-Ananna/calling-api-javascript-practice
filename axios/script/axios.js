console.clear();
// console.log(window);


axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((res)=> console.log(res.data))
    .catch((error)=> console.log(error));


axios.post("https://jsonplaceholder.typicode.com/posts", {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
})
    .then((res)=> console.log(res.data))
    .catch((error)=> console.log(error));


axios.put("https://jsonplaceholder.typicode.com/posts/1", {
        method: 'PUT',
        body: JSON.stringify({
            id: 1,
            title: 'foolish',
             body: 'bar - bar - boo',
             userId: 1,
        }),
})
    .then((res)=> console.log(res.data))
    .catch((error)=> console.log(error));


axios.patch("https://jsonplaceholder.typicode.com/posts/1", {
    // method: 'PUT',
    body: JSON.stringify({
        body: 'bar - bar - boo - la la la ',
        
        }),
})
    .then((res)=> console.log(res.data))
    .catch((error)=> console.log(error));


axios.delete("https://jsonplaceholder.typicode.com/posts/5")
    .then((res)=> console.log(res.data))
    .catch((error)=> console.log(error));



//async

const makeRequest = async (config)=>{

    return await axios(config);
}


const getData = () =>{
    makeRequest("https://jsonplaceholder.typicode.com/posts")
        .then((res)=>{ 
            console.log("Async Await Method");
            console.log(res)})
        .catch((error)=> console.log(error));
}
getData();


const createData = () =>{
    makeRequest({
        url: "https://jsonplaceholder.typicode.com/posts",
        method: "post",
        data: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
    })
        .then((res)=>{ 
            console.log("Async Await Method: creat data");
            console.log(res)})
        .catch((error)=> console.log(error));
}
createData();


