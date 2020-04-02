document.addEventListener('DOMContentLoaded', function () {
	// This code won't run until the DOM content is loaded...
    console.log('loaded!');
    let counter = document.querySelector("#counter")
    let plus = document.querySelector("#plus")
    let minus = document.querySelector("#minus")
    let heart = document.querySelector("#heart")
    let likes = document.querySelector("ul.likes")
    let pause = document.querySelector("#pause")
    let commentList = document.querySelector("#list")
    let commentForm = document.querySelector("#comment-form")
    let countNum = parseInt(counter.innerText, 10)
    let intervalID = window.setInterval(increaseCounter, 1000);
    const ul = document.createElement("ul")
    commentList.append(ul)


    function decrease(){
        countNum--
        counter.innerText = countNum
    }

    function increase(){
        countNum++
        counter.innerText = countNum
    }
    
    
    plus.addEventListener('click', increase)

    minus.addEventListener('click', decrease)

    function increaseCounter() { 
        countNum = countNum + 1 
        counter.innerText = countNum
    }

    heart.addEventListener('click', function() { 
        let list = document.createElement("li")
        list.innerText = counter.innerText
        likes.append(list)
    })

    pause.addEventListener('click', function() { 
      if (pause.innerText === "pause") {
        window.clearInterval(intervalID);
        pause.innerText = "Resume"
        minus.removeEventListener('click', decrease)
        plus.removeEventListener('click', increase)
      }
      else if(pause.innerText==="Resume") {
        pause.innerText = "pause"
        plus.addEventListener('click', increase)
        minus.addEventListener('click', decrease)
        intervalID = window.setInterval(increaseCounter, 1000);
      }
    })

    commentForm.addEventListener("submit", function(e){
        e.preventDefault();
        let comment1 = document.createElement("li")
        comment1.innerText = commentForm.comment.value
        ul.append(comment1)
    })





})
