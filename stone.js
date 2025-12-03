let computer =Math.floor(Math.random()*3)+1;
let user = prompt("enter 1 for rock\n Enter 2 for paper\n Enter 3for secissor");
if(user==1 ||user==2 ||user ==3){
 userinput(computer,user);

}else{
    console.log("you select worng!\n please choice 1,2,3 :");

}
function userinput(computer,user){
  if(computer == user){

    console.log("tie the game");

  }else if (user==1 && computer ==2 ) {
  console.log(`user win the game ,choise computer rock`);

  }else if(user ==2&& computer ==3) {
console.log(`computer win the game ,choise secissor computer`);

  }else if(user ==3 && computer ==1) {
    console.log(`computer win the game ,choise stone computer`);

  }else if(user ==1 && computer ==3){
console.log(`user win the game ,choise secissor computer`);

  }
}