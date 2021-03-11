function mandi(){
    console.log("Mandi");
}
function sarapan(callback){
    setTimeout(() => {
        console.log("Sarapan Tertunda 3 Detik");
        callback();
    },3000);
    }
function berangkatSekolah(){
    console.log("Berangkat Sekolah");
}
mandi();
sarapan(berangkatSekolah);
function helloWorld() {
    return helloWorld = new Promise((resolve) => {
            resolve("Hello World");
    })
};

let messsages = async () => {
    try{
        const msg = await helloWorld();
        setTimeout(() => {
            console.log(msg);
        },2000);
    }
    catch(error)
    {
        console.log(error);
    }
    };
messsages()

fetch("https://jsonplaceholder.typicode.com/users")
.then(function (response) {
    return response.json();
  })
  .then(function (user) {
    console.log(user);
  });

function ambilDataUser() {
}
ambilDataUser()

const getPromise = async () => {
      try {
        const res = await newPromise();
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    
    function helloWorld() {
         return new Promise((resolve, reject)=>{
           resolve("hello world");
          });
      }
     
      function getNameById (id){
         return new Promise((resolve, reject)=>{
             if (message == "hello world") {
                 resolve("hello world");
             }
             else {
                 reject("");
             }
         });
     }
