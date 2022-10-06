async function myFunc(){
    function getVideo(){
        console.log("Got video");
    }
    function addIntro(){
        console.log("Intro added");
    }
    function addSummary(){
        console.log("summary added");
    }
    getVideo();
    addIntro();
    addSummary();
}
myFunc();
console.log("the await function checking...")