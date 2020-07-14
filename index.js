console.log("not wait");
async function noo(){
    var promise= new Promise((resolve,reject)=>{
        setTimeout(()=>resolve(),5000)
    });
    var result=await promise;
    console.log("Second wait for 5 sec");
}
noo();