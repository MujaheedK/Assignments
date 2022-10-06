function getVideo(){
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            if(getVideo()){
                resolve("Got video")
            }
            else {
                reject("didn't got video")
            }
        },3000);
    })
}

let methodForResolve = (result) => {
    console.log("message after Resolve =" +result);
}
let methodForReject = (reject) => {
    console.log("message after Reject =" +reject);
}
 

function addIntro(){
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            if(addIntro()){
                resolve("Intro Added")
            }
            else {
                reject("Intro not added")
            }
        },3000);
    })
}

function addSummary(){
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            if(addSummary()){
                resolve("Summary Added")
            }
            else {
                reject("Summary not added")
            }
        },3000);
    })
}

getVideo().then(methodForResolve).catch(methodForReject);
addIntro().then(methodForResolve).catch(methodForReject);
addSummary().then(methodForResolve).catch(methodForReject);