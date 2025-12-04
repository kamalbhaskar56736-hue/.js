const id ={
    name: "kamalbhaskar",
    course: "B.Tech",
    year: "1st year",
    Email: "kamalbhaskar56736@gamil.com",
    mobileno: 7690083273,
    password: 9898,
    address: "pilani rajasthan",
    branch: "cse"

}

let username =prompt("enter your name:")

let userpassword = prompt("enter your password:")

if(name.id==username && password.id == userpassword){
    console.log("login in this site");
    for (const value in id) {
            console.log(id[value]);
    }

}else {
      console.log("incorrect id")
}