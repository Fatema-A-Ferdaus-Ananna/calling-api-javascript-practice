//web storage Api -- allows us to store & read data in browser
// web storage api -- localStorage, sessionStorage

// localStorage -- store,  read, update and remove data
// no expiry data: data never gets lost even if close the browser unlike session


//localStorage store data as key value pair -- String


// setItem(string key, string value) 
console.log(localStorage);
localStorage.setItem("userName", "Ananna");
localStorage.setItem("password", "12389");



//getItem(key) -- data retrive

// const userName = localStorage.getItem("userName");
// const userPass = localStorage.getItem("password");

// document.write(`Username: ${userName} <br> UserPass: ${userPass}`);
// console.log(userName, userPass);


//update -- we have to setItem again, then it will update the previous value

//removeItem(key)
localStorage.removeItem("userName");
localStorage.removeItem("password");


const countries = ["Bangladesh", "Poland", "Japan"];
localStorage.setItem("countries", JSON.stringify(countries));

const countries_list = JSON.parse(localStorage.getItem("countries"));
console.log(countries_list);

//localStorage.clear(); //all clear



