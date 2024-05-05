//add jQuery library cdn

// ajax - asynchronous javascript and xml

console.clear();
console.log(window);



const makeRequest = async (url, method, data)=>{

   try{
    const result = await $.ajax({
        url: url,
        method: method,
        data: data
    });
    return result;
   }
   catch(exp){
    console.log(exp); 
   }
}


const getData = ()=>{
    makeRequest("https://jsonplaceholder.typicode.com/posts/1", "GET")
    .then((res)=>console.log(res));
}
getData();

const createData = ()=>{
    makeRequest("https://jsonplaceholder.typicode.com/posts", "POST", {
        title: 'foo',
        body: 'bar',
        userId: 1,
    })
    .then((res)=>console.log(res));
}
createData();

const deleteData = ()=>{
    makeRequest("https://jsonplaceholder.typicode.com/posts/4", "DELETE")
    .then((res)=>console.log(res));
}
deleteData();


//same for -- put, patch, delete