console.log("hello world");

const getusername = document.getElementById("user") as HTMLInputElement;

const formSubmit = document.querySelector("#form") as HTMLFormElement;

const main_container = document.querySelector(".main-Container") as HTMLElement;
// lets define the contract of an  object 



interface userData{
    name:string;
    class:string;
    avatar_url:string;
    url:string;

}


// default fun call
