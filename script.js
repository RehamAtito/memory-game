// function => click in the start game
let play = true
document.querySelector(".control-buttons span").onclick = function(){

    let yourName = prompt("Whats Your Name?");

    if(yourName == null || yourName == ""){
        document.querySelector(".name span").innerHTML = "unkNow"
    }else{
        document.querySelector(".name span").innerHTML = yourName
    }
    let level ;
    function askForLevels (){

        level = prompt("Levels(o Easy o Medium o Hard)");
        
        if(level == null || level == ""){
            document.querySelector(".levels span").innerHTML = ""
        }else{
            document.querySelector(".levels span").innerHTML = level
        }
    }

askForLevels()


    //Remove in the screen 
    document.querySelector(".control-buttons").remove();
    document.getElementById('start').play();


            const timeH = document.querySelector('.timer');
            let timeSecond;
            if(level=='Easy' || level=='easy'){
                timeSecond = 90
            }else if(level == 'Medium' || level == 'medium'){
                timeSecond = 60
            }else if(level=='Hard' || level=='hard'){
                timeSecond = 30
            }else{
                askForLevels();
            }

            displayTime(timeSecond);
            const countDown = setInterval(() => {
                timeSecond--;
                displayTime(timeSecond);
                if(timeSecond <= 0 || timeSecond < 1){
                    endTime();
                    play = false
                    setTimeout(() => {
                        //reload
                        window.location.reload();
                    },5000)
                    clearInterval(countDown);
                }
            }, 1000);

            function displayTime(second){
                const min = Math.floor(second / 60);
                const sec = Math.floor(second % 60);
                timeH.innerHTML = `${min<10 ? '0':''}${min}:${sec<10?'' : ''}${sec}`
            }
            function endTime(){
                timeH.innerHTML = 'Time Out'
                document.getElementById('game-over').play();
            }
};


// The time the icon will be rotated
const duration = 1000;

const blockscontainer = document.querySelector(".memory-game-blocks");
//icon 
const blocks = Array.from(blockscontainer.children);
// console.log(blocks);

let orderRange = [...Array(blocks.length).keys()];
// console.log(orderRange);
wordRangom(orderRange);
// console.log(orderRange);

blocks.forEach((block , index) => {
    // console.log(block , index);
    block.style.order = orderRange[index];
    block.addEventListener('click', function (){
        if(play)
            flipBlock(block)
    })
});

//flip Block function
function flipBlock(selectedBlock){
    //add class is flipped
    selectedBlock.classList.add('is-flipped');

    //collect All flipped cards
    let flipBlocks = blocks.filter(flipBlock => flipBlock.classList.contains("is-flipped"));
    //if theres two selected blocks 
    if (flipBlocks.length === 2){
        //stop clicking function 
        stopClicking()
        //check matched blok function 
        checkMatchedBlocks(flipBlocks[0], flipBlocks[1])
    }
}


// stop clicking function
function stopClicking(){
    //add class no clicking on main container 
    blockscontainer.classList.add('no-clicking');
    setTimeout(() => {
        //Remove class no clicking after the duration 
        blockscontainer.classList.remove('no-clicking');
    }, duration)
}

//check matched block 
function checkMatchedBlocks(firstBlock, secondBlock){
    let triesElement = document.querySelector('.tries span');
    if(firstBlock.dataset.technology === secondBlock.dataset.technology){

        firstBlock.classList.remove('is-flipped');
        secondBlock.classList.remove('is-flipped');

        firstBlock.classList.add('has-match');
        secondBlock.classList.add('has-match');
    
        document.getElementById('success').play();

    } else {
        triesElement.innerHTML = parseInt(triesElement.innerHTML) + 1;
        
        setTimeout(() => {
            firstBlock.classList.remove('is-flipped');
            secondBlock.classList.remove('is-flipped');
        }, duration)
        document.getElementById('fail').play();
    }

}
//randem function
function wordRangom(numbers){
    //setting
    let current = numbers.length,
        temp,
        random;
    
    for(current ; current > 0 ; ){
        //get random number 
        random = Math.floor(Math.random() * current);
        current--;
        //save current element 
        temp = numbers[current];
        //current element = random element
        numbers[current] = numbers[random];
        // random element = get element 
        numbers[random] = temp;
    }
    return numbers;
}

   let array =element.classList.contains('is-flipped');
    console.log(array);
