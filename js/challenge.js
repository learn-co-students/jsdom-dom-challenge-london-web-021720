const counter = document.getElementById("counter")
const minus = document.getElementById("minus")
const plus = document.getElementById("plus")
const heart = document.getElementById("heart")
const pauseButton = document.getElementById("pause")
const commentForm = document.getElementById("comment-form")
const newComment = document.getElementById("comment-input")

const likesList = document.querySelector("ul.likes")
const commentList = document.getElementById("list")


window.addEventListener("DOMContentLoaded", e => {

    let timer = window.setInterval(() => counter.innerText++, 1000);
    
    minus.addEventListener("click", e => counter.innerText--)

    plus.addEventListener("click", e =>  counter.innerText++)
    
    heart.addEventListener("click", e => {
        // .innerText.split(" ")[0] == counter.innerText

        const currentID = document.getElementById(`${counter.innerText}`)

        if (!!currentID)
        {
            const currentLikes = currentID.querySelector(`span`)
            currentLikes.innerText++
            currentID.innerHTML = `${counter.innerText} has been liked <span>${currentLikes.innerText}</span> times`
        }
        else
        {
            const newLike = document.createElement("li")
            newLike.id = `${counter.innerText}`
            newLike.innerHTML = `${counter.innerText} has been liked <span>1</span> time`
            likesList.append(newLike)
        }
    })

    pauseButton.addEventListener("click", e => {
        if (pauseButton.innerText === "Pause")
        {
            minus.disabled = true
            plus.disabled = true
            heart.disabled = true
            pauseButton.innerText = "Resume"
            window.clearInterval(timer)
        }
        else if (pauseButton.innerText === "Resume")
        {
            minus.disabled = false
            plus.disabled = false
            heart.disabled = false
            pauseButton.innerText = "Pause"
            timer = window.setInterval(() => counter.innerText++, 1000);
        }
    })

    commentForm.addEventListener("submit", e => {
        e.preventDefault()

        const comment = document.createElement("li")
        comment.innerText = newComment.value
        commentList.append(comment)

        commentForm.reset()
    })
})