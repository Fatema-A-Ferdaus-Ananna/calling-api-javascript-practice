//localStorage vs sessoinStorage -- 10mb vs 5mb
// permanent vs session(tab)


sessionStorage.setItem("userName1", "Fatema-A-Ferdaus");
sessionStorage.setItem("userName2", "Ananna");

console.log(sessionStorage.getItem("userName1"));

sessionStorage.removeItem("userName1");

// sessionStorage.clear(); //clear all

const user = {
    name: "mina",
    id: "123",
    pass: "@#$"
}

sessionStorage.setItem("user", JSON.stringify(user));

const userinfo = JSON.parse(sessionStorage.getItem("user"));
console.log(userinfo);
document.write(`User Info: ${userinfo}`);