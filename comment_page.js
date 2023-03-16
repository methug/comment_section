const body = document.querySelector("body")
const main = document.querySelector('.comment-section')
const usedData = {
    "currentUser": {
        "image": {
            "png": "C:/Users/User/Desktop/interactive_comments/avatars/image-juliusomo.png",
            "webp": "./images/avatars/image-juliusomo.webp"
        },
        "username": "juliosimo"
    },
    "comments": [
        {
            "id": 1,
            "content": "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
            "createdAt": "1 month ago",
            "score": 12,
            "user": {
                "image": {
                    "png": "C:/Users/User/Desktop/interactive_comments/avatars/image-amyrobson.png",
                    "webp": "./images/avatars/image-amyrobson.webp"
                },
                "username": "amyrobson"
            },
            "replies": []
        },
        {
            "id": 2,
            "content": "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
            "createdAt": "2 weeks ago",
            "score": 5,
            "user": {
                "image": {
                    "png": "C:/Users/User/Desktop/interactive_comments/avatars/image-maxblagun.png",
                    "webp": "./images/avatars/image-maxblagun.webp"
                },
                "username": "maxblagun"
            },
            "replies": [
                {
                    "id": 3,
                    "content": "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
                    "createdAt": "1 week ago",
                    "score": 4,
                    "replyingTo": "maxblagun",
                    "user": {
                        "image": {
                            "png": "C:/Users/User/Desktop/interactive_comments/avatars/image-ramsesmiron.png",
                            "webp": "./images/avatars/image-ramsesmiron.webp"
                        },
                        "username": "ramsesmiron"
                    }
                },
                {
                    "id": 4,
                    "content": "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
                    "createdAt": "2 days ago",
                    "score": 2,
                    "replyingTo": "ramsesmiron",
                    "user": {
                        "image": {
                            "png": "C:/Users/User/Desktop/interactive_comments/avatars/image-juliusomo.png",
                            "webp": "./images/avatars/image-juliusomo.webp"
                        },
                        "username": "juliusomo"
                    }
                }
            ]
        }
    ]
}
const selfImg = document.querySelector('#self-img')
selfImg.src = usedData.currentUser.image.png
const likes = document.querySelectorAll('.likes')
const userImages = document.querySelectorAll('.user-img')
const userNames = document.querySelectorAll('.userName')
const commentDate = document.querySelectorAll('.commentDate')
const comments = document.querySelectorAll('.comment')

const repliesLikes = document.querySelectorAll('.replies-box .likes')
const replierImages = document.querySelectorAll('.replies-box .user-img')
const replierNames = document.querySelectorAll('.replies-box .userName')
const replierCommentDate = document.querySelectorAll('.replies-box .commentDate')
const replierComments = document.querySelectorAll('.replies-box .comment')

for (let i = 0; i < 2; i++) {
    likes[i].innerText = usedData.comments[i].score
    userImages[i].src = usedData.comments[i].user.image.png
    userNames[i].innerText = usedData.comments[i].user.username
    commentDate[i].innerText = usedData.comments[i].createdAt
    comments[i].innerText = usedData.comments[i].content
    repliesLikes[i].innerText = usedData.comments[1].replies[i].score
    replierImages[0].src = usedData.comments[1].replies[0].user.image.png
    replierImages[1].src = usedData.currentUser.image.png
    replierNames[i].innerText = usedData.comments[1].replies[i].user.username
    replierCommentDate[i].innerText = usedData.comments[1].replies[i].createdAt
    replierComments[i].innerText = usedData.comments[1].replies[i].content
    userImages[i].style.width = '40px'
    userImages[i].style.height = '40px'
    replierImages[i].style.width = '40px'
    replierImages[i].style.height = '40px'
}

const plusBtn = document.querySelectorAll('.plusLikeBtn')
const minusBtn = document.querySelectorAll('.minusLikeBtn')
const scores = document.querySelectorAll('.likes')
const replyBtn = document.querySelectorAll('.replyBtn')
const deleteBtn = document.querySelectorAll('.deleteBtn')
const sendBtn = document.querySelector('#send')
const commentTxt = document.querySelector('#newCommentTxt')
sendBtn.addEventListener('click', function () {


    const footer = document.querySelector("footer")
    const section = document.createElement('section')
    section.classList.add('comment-box')
    section.innerHTML = `
    <div class="comment-likes">
    <button class="plusLikeBtn"><img src="C:/Users/User/Desktop/interactive_comments/icons/icon-plus.png"
            alt="plus"></button>
    <span class="likes">0</span>
    <button class="minusLikeBtn"><img src="C:/Users/User/Desktop/interactive_comments/icons/icon-minus.png"
            alt="minus"></button>

</div>
<div class="comment-text self">
    <header>
        <div class="user-header">
            <img src="" alt="userImg" class="user-img">
            <span class="userName"> <span id="self">You</span></span>
            <span class="commentDate"></span>
        </div>
        <span>
            <button class="deleteBtn"><img
                    src="C:/Users/User/Desktop/interactive_comments/icons/icon-delete.png" alt="delete">
                Delete</button>
            <button class="editBtn"><img
                    src="C:/Users/User/Desktop/interactive_comments/icons/icon-reply.png" alt="edit">
                Edit</button>
        </span>
    </header>
    <p class="comment">

    </p>
</div>
    `
    const editBtn = section.children[1].children[0].children[1].children[1]
    editBtn.addEventListener('click', function () {

        const section = document.createElement('section')
        section.style.height = '19%'
        section.classList.add('comment-box', 'replies-box')
        section.innerHTML = `
    <div class="comment-likes">
    <button class="plusLikeBtn"><img src="C:/Users/User/Desktop/interactive_comments/icons/icon-plus.png"
            alt="plus"></button>
    <span class="likes">0</span>
    <button class="minusLikeBtn"><img src="C:/Users/User/Desktop/interactive_comments/icons/icon-minus.png"
            alt="minus"></button>

</div>
<div class="comment-text self">
    <header>
        <div class="user-header">
            <img src="" alt="userImg" class="user-img">
            <span class="userName"> <span id="self">You</span></span>
            <span class="commentDate"></span>
        </div>
        <span>
            <button class="deleteBtn"><img
                    src="C:/Users/User/Desktop/interactive_comments/icons/icon-delete.png" alt="delete">
                Delete</button>
            <button class="editBtn"><img
                    src="C:/Users/User/Desktop/interactive_comments/icons/icon-reply.png" alt="edit">
                Edit</button>
        </span>
    </header>
    <textarea name="comment" id="newCommentTxt" cols="70" rows="4" placeholder="Add a comment"
    style="border-radius:12px;"></textarea>
    <button class="update" id="send" style="align-self:flex-end; margin:9px 0px;">Update</button>
</div>`

        const textarea = section.children[1].children[1]
        textarea.value = this.parentElement.parentElement.parentElement.children[1].innerText
        const plusBtn = section.children[0].children[0]
        const score = section.children[0].children[1]
        const minusBtn = section.children[0].children[2]
        const userImg = section.children[1].children[0].children[0].children[0]
        const userName = section.children[1].children[0].children[0].children[1]
        userImg.src = usedData.currentUser.image.png
        userName.innerText = usedData.currentUser.username
        plusBtn.addEventListener('click', function () {
            let interacted = parseInt(score.innerText)
            interacted++
            score.innerText = interacted
        })
        minusBtn.addEventListener('click', function () {
            let interacted = parseInt(score.innerText)
            interacted--
            if (interacted >= 0) {
                score.innerText = interacted
            }
        })

        const deleteBtn = section.children[1].children[0].children[1].children[0]
        // add listeners to delete, edit and send buttons
        deleteBtn.addEventListener('click', function () {
            const queryContainer = document.createElement('div')
            queryContainer.classList.add("query")
            const title = document.createElement('h3')
            title.style.fontSize = '19px'
            title.style.fontFamily = 'Rubik'
            title.innerText = 'Delete Comment'
            const question = document.createElement('p')
            question.style.fontSize = '14px'
            question.style.fontFamily = 'Rubik'
            question.style.margin = '0 10px'
            question.innerText = "Are you sure you want to delete this comment? This will remove the comment and can't be undone."
            const btnContainer = document.createElement('div')
            const cancel = document.createElement("button")
            const agree = document.createElement('button')
            cancel.addEventListener('click', function () {
                queryContainer.remove()
                main.classList.toggle('active')
                clickCounter = 0
            })
            agree.addEventListener('click', function () {
                section.remove()
                queryContainer.remove()
                main.classList.toggle('active')
                clickCounter = 0
            })
            btnContainer.style.width = '100%'
            btnContainer.append(cancel)
            btnContainer.append(agree)
            btnContainer.style.display = 'flex'
            btnContainer.style.justifyContent = 'space-evenly'
            btnContainer.style.alignItems = 'center'
            cancel.innerText = 'Cancel'
            agree.innerText = 'Delete'
            cancel.classList.add('cancel-btn')
            agree.classList.add('delete-btn')
            queryContainer.append(title)
            queryContainer.append(question)
            queryContainer.append(btnContainer)
            main.insertAdjacentElement('afterend', queryContainer)
            main.classList.toggle('active')


        })


        this.parentElement.parentElement.parentElement.parentElement.replaceWith(section)

        const updateBtn = section.children[1].children[2]
        updateBtn.addEventListener('click', function () {
            const section = document.createElement('section')
            section.classList.add('comment-box')
            section.innerHTML = `
        <div class="comment-likes">
        <button class="plusLikeBtn"><img src="C:/Users/User/Desktop/interactive_comments/icons/icon-plus.png"
                alt="plus"></button>
        <span class="likes">0</span>
        <button class="minusLikeBtn"><img src="C:/Users/User/Desktop/interactive_comments/icons/icon-minus.png"
                alt="minus"></button>

    </div>
    <div class="comment-text self">
        <header>
            <div class="user-header">
                <img style='width:40px;height:40px;' src="C:/Users/User/Desktop/interactive_comments/avatars/image-juliusomo.png" alt="userImg"
                    class="user-img">
                <span class="userName">juliusomo<span id="self">You</span></span>
                <span class="commentDate" id="replied-commentDate">15 Seconds Ago</span >
            </div >
        <span>
            <button class="deleteBtn"><img src="C:/Users/User/Desktop/interactive_comments/icons/icon-delete.png"
                alt="delete">
                Delete</button>
            <button class="editBtn"><img src="C:/Users/User/Desktop/interactive_comments/icons/icon-reply.png"
                alt="edit">
                Edit</button>
        </span>
        </header >
        <p class="comment" id="p">
          
        </p>
    </div >

`
            section.children[1].children[1].innerText = textarea.value
            const plusBtn = section.children[0].children[0]
            const score = section.children[0].children[1]
            const minusBtn = section.children[0].children[2]
            const userImg = section.children[1].children[0].children[0].children[0]
            const userName = section.children[1].children[0].children[0].children[1]
            userImg.src = usedData.currentUser.image.png
            userName.innerText = usedData.currentUser.username
            plusBtn.addEventListener('click', function () {
                let interacted = parseInt(score.innerText)
                interacted++
                score.innerText = interacted
            })
            minusBtn.addEventListener('click', function () {
                let interacted = parseInt(score.innerText)
                interacted--
                if (interacted >= 0) {
                    score.innerText = interacted
                }
            })

            const deleteBtn = section.children[1].children[0].children[1].children[0]
            // add listeners to delete, edit and send buttons
            deleteBtn.addEventListener('click', function () {
                const queryContainer = document.createElement('div')
                queryContainer.classList.add("query")
                const title = document.createElement('h3')
                title.style.fontSize = '19px'
                title.style.fontFamily = 'Rubik'
                title.innerText = 'Delete Comment'
                const question = document.createElement('p')
                question.style.fontSize = '14px'
                question.style.fontFamily = 'Rubik'
                question.style.margin = '0 10px'
                question.innerText = "Are you sure you want to delete this comment? This will remove the comment and can't be undone."
                const btnContainer = document.createElement('div')
                const cancel = document.createElement("button")
                const agree = document.createElement('button')
                cancel.addEventListener('click', function () {
                    queryContainer.remove()
                    main.classList.toggle('active')
                    clickCounter = 0
                })
                agree.addEventListener('click', function () {
                    section.remove()
                    queryContainer.remove()
                    main.classList.toggle('active')
                    clickCounter = 0
                })
                btnContainer.style.width = '100%'
                btnContainer.append(cancel)
                btnContainer.append(agree)
                btnContainer.style.display = 'flex'
                btnContainer.style.justifyContent = 'space-evenly'
                btnContainer.style.alignItems = 'center'
                cancel.innerText = 'Cancel'
                agree.innerText = 'Delete'
                cancel.classList.add('cancel-btn')
                agree.classList.add('delete-btn')
                queryContainer.append(title)
                queryContainer.append(question)
                queryContainer.append(btnContainer)
                main.insertAdjacentElement('afterend', queryContainer)
                main.classList.toggle('active')


            })

            this.parentElement.parentElement.replaceWith(section)


        })


    })
    const deleteBtn = section.children[1].children[0].children[1].children[0]
    deleteBtn.addEventListener('click', function () {
        const queryContainer = document.createElement('div')
        queryContainer.classList.add("query")
        const title = document.createElement('h3')
        title.style.fontSize = '19px'
        title.style.fontFamily = 'Rubik'
        title.innerText = 'Delete Comment'
        const question = document.createElement('p')
        question.style.fontSize = '14px'
        question.style.fontFamily = 'Rubik'
        question.style.margin = '0 10px'
        question.innerText = "Are you sure you want to delete this comment? This will remove the comment and can't be undone."
        const btnContainer = document.createElement('div')
        const cancel = document.createElement("button")
        const agree = document.createElement('button')
        cancel.addEventListener('click', function () {
            queryContainer.remove()
            main.classList.toggle('active')
            clickCounter = 0
        })
        agree.addEventListener('click', function () {
            section.remove()
            queryContainer.remove()
            main.classList.toggle('active')
            clickCounter = 0
        })
        btnContainer.style.width = '100%'
        btnContainer.append(cancel)
        btnContainer.append(agree)
        btnContainer.style.display = 'flex'
        btnContainer.style.justifyContent = 'space-evenly'
        btnContainer.style.alignItems = 'center'
        cancel.innerText = 'Cancel'
        agree.innerText = 'Delete'
        cancel.classList.add('cancel-btn')
        agree.classList.add('delete-btn')
        queryContainer.append(title)
        queryContainer.append(question)
        queryContainer.append(btnContainer)
        main.insertAdjacentElement('afterend', queryContainer)
        main.classList.toggle('active')


    })
    const plusBtn = section.children[0].children[0]
    const score = section.children[0].children[1]
    const minusBtn = section.children[0].children[2]

    plusBtn.addEventListener('click', function () {
        let interacted = parseInt(score.innerText)
        interacted++
        score.innerText = interacted
    })
    minusBtn.addEventListener('click', function () {
        let interacted = parseInt(score.innerText)
        interacted--
        if (interacted >= 0) {
            score.innerText = interacted
        }
    })
    section.children[1].children[0].children[0].children[0].style.width = '40px'
    section.children[1].children[0].children[0].children[0].style.height = '40px'
    section.children[1].children[0].children[0].children[0].src = usedData.currentUser.image.png
    section.children[1].children[1].innerText = this.previousElementSibling.value
    section.children[1].children[0].children[0].children[1].innerText = usedData.currentUser.username
    section.children[1].children[0].children[0].children[2].innerText = '10 seconds ago'
    footer.insertAdjacentElement('beforebegin', section)
    this.previousElementSibling.value = ''

})

for (let each of deleteBtn) {
    each.addEventListener('click', function () {
        const queryContainer = document.createElement('div')
        queryContainer.classList.add("query")
        const title = document.createElement('h3')
        title.style.fontSize = '19px'
        title.style.fontFamily = 'Rubik'
        title.innerText = 'Delete Comment'
        const question = document.createElement('p')
        question.style.fontSize = '14px'
        question.style.fontFamily = 'Rubik'
        question.innerText = "Are you sure you want to delete this comment? This will remove the comment and can't be undone."
        const btnContainer = document.createElement('div')
        const cancel = document.createElement("button")
        const agree = document.createElement('button')
        cancel.addEventListener('click', function () {

            queryContainer.remove()
            main.classList.toggle('active')
            clickCounter = 0
        })
        agree.addEventListener('click', function () {
            deleteBtn[0].parentElement.parentElement.parentElement.parentElement.remove()
            queryContainer.remove()
            main.classList.toggle('active')
            clickCounter = 0
        })
        btnContainer.style.width = '100%'
        btnContainer.append(cancel)
        btnContainer.append(agree)
        btnContainer.style.display = 'flex'
        btnContainer.style.justifyContent = 'space-evenly'
        btnContainer.style.alignItems = 'center'
        cancel.innerText = 'Cancel'
        agree.innerText = 'Delete'
        cancel.classList.add('cancel-btn')
        agree.classList.add('delete-btn')
        queryContainer.append(title)
        queryContainer.append(question)
        queryContainer.append(btnContainer)
        main.insertAdjacentElement('afterend', queryContainer)
        main.classList.toggle('active')


    })
    for (let i = 0; i < plusBtn.length; i++) {
        plusBtn[i].addEventListener('click', function () {
            let interacted = parseInt(scores[i].innerText)
            interacted++
            scores[i].innerText = interacted
        })
        minusBtn[i].addEventListener('click', function () {
            let interacted = parseInt(scores[i].innerText)
            interacted--
            if (interacted >= 0) {
                scores[i].innerText = interacted
            }
        })
    }
}
let clickCounter = 0;
for (let each of replyBtn) {

    each.addEventListener('click', function () {
        clickCounter++
        const txtContainer = document.createElement('div')
        txtContainer.innerHTML = ` <img src="" alt="selfImg">
     <textarea name="comment" id="newCommentTxt" cols="70" rows="4" placeholder="Add a comment" class="repliedTxt"></textarea>
     <div style='height:100%;display:flex;flex-direction:column;justify-content:space-evenly;align-items:center;'>
     <button id="send" class='rep'>Reply</button>
     <button style="margin-top:10px;" id='send' class='cancel'>Cancel</button>
     </div>`
        txtContainer.children[0].src = usedData.currentUser.image.png
        txtContainer.classList.add('add-comment-section')
        if (clickCounter <= 1) {
            this.parentElement.parentElement.parentElement.insertAdjacentElement('afterend', txtContainer)
        }
        const rep = document.querySelector(".rep")
        const cancel = document.querySelector('.cancel')
        cancel.addEventListener('click', function () {
            txtContainer.remove()
            clickCounter = 0
        })

        const txt = document.querySelector('.repliedTxt')
        let to = each.previousElementSibling.children[1].innerText
        txt.value = `@${to}  `
        rep.addEventListener('click', function () {
            const comment = txt.value
            const section = document.createElement('section')
            section.classList.add("comment-box")
            section.classList.add('replies-box')

            section.innerHTML = `
            <div class="comment-likes">
            <button class="plusLikeBtn"><img src="C:/Users/User/Desktop/interactive_comments/icons/icon-plus.png"
                    alt="plus"></button>
            <span class="likes">0</span>
            <button class="minusLikeBtn"><img src="C:/Users/User/Desktop/interactive_comments/icons/icon-minus.png"
                    alt="minus"></button>
    
        </div>
        <div class="comment-text self">
            <header>
                <div class="user-header">
                    <img style='width:40px;height:40px;' src="C:/Users/User/Desktop/interactive_comments/avatars/image-juliusomo.png" alt="userImg"
                        class="user-img">
                    <span class="userName">juliusomo<span id="self">You</span></span>
                    <span class="commentDate" id="replied-commentDate">15 Seconds Ago</span >
                </div >
            <span>
                <button class="deleteBtn"><img src="C:/Users/User/Desktop/interactive_comments/icons/icon-delete.png"
                    alt="delete">
                    Delete</button>
                <button class="editBtn"><img src="C:/Users/User/Desktop/interactive_comments/icons/icon-reply.png"
                    alt="edit">
                    Edit</button>
            </span>
            </header >
            <p class="comment" id="p">
              
            </p>
        </div >
            `
            const plusBtn = section.children[0].children[0]
            const score = section.children[0].children[1]
            const minusBtn = section.children[0].children[2]
            const userImg = section.children[1].children[0].children[0].children[0]
            const userName = section.children[1].children[0].children[0].children[1]
            userImg.src = usedData.currentUser.image.png
            userName.innerText = usedData.currentUser.username
            plusBtn.addEventListener('click', function () {
                let interacted = parseInt(score.innerText)
                interacted++
                score.innerText = interacted
            })
            minusBtn.addEventListener('click', function () {
                let interacted = parseInt(score.innerText)
                interacted--
                if (interacted >= 0) {
                    score.innerText = interacted
                }
            })

            const deleteBtn = section.children[1].children[0].children[1].children[0]
            // add listeners to delete, edit and send buttons
            deleteBtn.addEventListener('click', function () {
                const queryContainer = document.createElement('div')
                queryContainer.classList.add("query")
                const title = document.createElement('h3')
                title.style.fontSize = '19px'
                title.style.fontFamily = 'Rubik'
                title.innerText = 'Delete Comment'
                const question = document.createElement('p')
                question.style.fontSize = '14px'
                question.style.fontFamily = 'Rubik'
                question.style.margin = '0 10px'
                question.innerText = "Are you sure you want to delete this comment? This will remove the comment and can't be undone."
                const btnContainer = document.createElement('div')
                const cancel = document.createElement("button")
                const agree = document.createElement('button')
                cancel.addEventListener('click', function () {
                    queryContainer.remove()
                    main.classList.toggle('active')
                    clickCounter = 0
                })
                agree.addEventListener('click', function () {
                    section.remove()
                    queryContainer.remove()
                    main.classList.toggle('active')
                    clickCounter = 0
                })
                btnContainer.style.width = '100%'
                btnContainer.append(cancel)
                btnContainer.append(agree)
                btnContainer.style.display = 'flex'
                btnContainer.style.justifyContent = 'space-evenly'
                btnContainer.style.alignItems = 'center'
                cancel.innerText = 'Cancel'
                agree.innerText = 'Delete'
                cancel.classList.add('cancel-btn')
                agree.classList.add('delete-btn')
                queryContainer.append(title)
                queryContainer.append(question)
                queryContainer.append(btnContainer)
                main.insertAdjacentElement('afterend', queryContainer)
                main.classList.toggle('active')


            })


            section.children[1].children[1].innerText = comment
            txtContainer.replaceWith(section)
            clickCounter = 0

            section.children[1].children[0].children[1].children[1].addEventListener('click', function () {
                console.log('hey')
                const section = document.createElement('section')
                section.style.height = '19%'
                section.classList.add('comment-box', 'replies-box')
                section.innerHTML = `
            <div class="comment-likes">
            <button class="plusLikeBtn"><img src="C:/Users/User/Desktop/interactive_comments/icons/icon-plus.png"
                    alt="plus"></button>
            <span class="likes">0</span>
            <button class="minusLikeBtn"><img src="C:/Users/User/Desktop/interactive_comments/icons/icon-minus.png"
                    alt="minus"></button>
        
        </div>
        <div class="comment-text self">
            <header>
                <div class="user-header">
                    <img src="" alt="userImg" class="user-img">
                    <span class="userName"> <span id="self">You</span></span>
                    <span class="commentDate"></span>
                </div>
                <span>
                    <button class="deleteBtn"><img
                            src="C:/Users/User/Desktop/interactive_comments/icons/icon-delete.png" alt="delete">
                        Delete</button>
                    <button class="editBtn"><img
                            src="C:/Users/User/Desktop/interactive_comments/icons/icon-reply.png" alt="edit">
                        Edit</button>
                </span>
            </header>
            <textarea name="comment" id="newCommentTxt" cols="70" rows="4" placeholder="Add a comment"
            style="border-radius:12px;"></textarea>
            <button class="update" id="send" style="align-self:flex-end; margin:9px 0px;">Update</button>
        </div>`

                const textarea = section.children[1].children[1]
                textarea.value = this.parentElement.parentElement.parentElement.children[1].innerText
                const plusBtn = section.children[0].children[0]
                const score = section.children[0].children[1]
                const minusBtn = section.children[0].children[2]
                const userImg = section.children[1].children[0].children[0].children[0]
                const userName = section.children[1].children[0].children[0].children[1]
                userImg.src = usedData.currentUser.image.png
                userName.innerText = usedData.currentUser.username
                plusBtn.addEventListener('click', function () {
                    let interacted = parseInt(score.innerText)
                    interacted++
                    score.innerText = interacted
                })
                minusBtn.addEventListener('click', function () {
                    let interacted = parseInt(score.innerText)
                    interacted--
                    if (interacted >= 0) {
                        score.innerText = interacted
                    }
                })

                const deleteBtn = section.children[1].children[0].children[1].children[0]
                // add listeners to delete, edit and send buttons
                deleteBtn.addEventListener('click', function () {
                    const queryContainer = document.createElement('div')
                    queryContainer.classList.add("query")
                    const title = document.createElement('h3')
                    title.style.fontSize = '19px'
                    title.style.fontFamily = 'Rubik'
                    title.innerText = 'Delete Comment'
                    const question = document.createElement('p')
                    question.style.fontSize = '14px'
                    question.style.fontFamily = 'Rubik'
                    question.style.margin = '0 10px'
                    question.innerText = "Are you sure you want to delete this comment? This will remove the comment and can't be undone."
                    const btnContainer = document.createElement('div')
                    const cancel = document.createElement("button")
                    const agree = document.createElement('button')
                    cancel.addEventListener('click', function () {
                        queryContainer.remove()
                        main.classList.toggle('active')
                        clickCounter = 0
                    })
                    agree.addEventListener('click', function () {
                        section.remove()
                        queryContainer.remove()
                        main.classList.toggle('active')
                        clickCounter = 0
                    })
                    btnContainer.style.width = '100%'
                    btnContainer.append(cancel)
                    btnContainer.append(agree)
                    btnContainer.style.display = 'flex'
                    btnContainer.style.justifyContent = 'space-evenly'
                    btnContainer.style.alignItems = 'center'
                    cancel.innerText = 'Cancel'
                    agree.innerText = 'Delete'
                    cancel.classList.add('cancel-btn')
                    agree.classList.add('delete-btn')
                    queryContainer.append(title)
                    queryContainer.append(question)
                    queryContainer.append(btnContainer)
                    main.insertAdjacentElement('afterend', queryContainer)
                    main.classList.toggle('active')


                })


                this.parentElement.parentElement.parentElement.parentElement.replaceWith(section)

                const updateBtn = section.children[1].children[2]
                updateBtn.addEventListener('click', function () {
                    const section = document.createElement('section')
                    section.classList.add('comment-box')
                    section.innerHTML = `
                <div class="comment-likes">
                <button class="plusLikeBtn"><img src="C:/Users/User/Desktop/interactive_comments/icons/icon-plus.png"
                        alt="plus"></button>
                <span class="likes">0</span>
                <button class="minusLikeBtn"><img src="C:/Users/User/Desktop/interactive_comments/icons/icon-minus.png"
                        alt="minus"></button>
        
            </div>
            <div class="comment-text self">
                <header>
                    <div class="user-header">
                        <img style='width:40px;height:40px;' src="C:/Users/User/Desktop/interactive_comments/avatars/image-juliusomo.png" alt="userImg"
                            class="user-img">
                        <span class="userName">juliusomo<span id="self">You</span></span>
                        <span class="commentDate" id="replied-commentDate">15 Seconds Ago</span >
                    </div >
                <span>
                    <button class="deleteBtn"><img src="C:/Users/User/Desktop/interactive_comments/icons/icon-delete.png"
                        alt="delete">
                        Delete</button>
                    <button class="editBtn"><img src="C:/Users/User/Desktop/interactive_comments/icons/icon-reply.png"
                        alt="edit">
                        Edit</button>
                </span>
                </header >
                <p class="comment" id="p">
                  
                </p>
            </div >
        
        `
                    section.children[1].children[1].innerText = textarea.value
                    const plusBtn = section.children[0].children[0]
                    const score = section.children[0].children[1]
                    const minusBtn = section.children[0].children[2]
                    const userImg = section.children[1].children[0].children[0].children[0]
                    const userName = section.children[1].children[0].children[0].children[1]
                    userImg.src = usedData.currentUser.image.png
                    userName.innerText = usedData.currentUser.username
                    plusBtn.addEventListener('click', function () {
                        let interacted = parseInt(score.innerText)
                        interacted++
                        score.innerText = interacted
                    })
                    minusBtn.addEventListener('click', function () {
                        let interacted = parseInt(score.innerText)
                        interacted--
                        if (interacted >= 0) {
                            score.innerText = interacted
                        }
                    })

                    const deleteBtn = section.children[1].children[0].children[1].children[0]
                    // add listeners to delete, edit and send buttons
                    deleteBtn.addEventListener('click', function () {
                        const queryContainer = document.createElement('div')
                        queryContainer.classList.add("query")
                        const title = document.createElement('h3')
                        title.style.fontSize = '19px'
                        title.style.fontFamily = 'Rubik'
                        title.innerText = 'Delete Comment'
                        const question = document.createElement('p')
                        question.style.fontSize = '14px'
                        question.style.fontFamily = 'Rubik'
                        question.style.margin = '0 10px'
                        question.innerText = "Are you sure you want to delete this comment? This will remove the comment and can't be undone."
                        const btnContainer = document.createElement('div')
                        const cancel = document.createElement("button")
                        const agree = document.createElement('button')
                        cancel.addEventListener('click', function () {
                            queryContainer.remove()
                            main.classList.toggle('active')
                            clickCounter = 0
                        })
                        agree.addEventListener('click', function () {
                            section.remove()
                            queryContainer.remove()
                            main.classList.toggle('active')
                            clickCounter = 0
                        })
                        btnContainer.style.width = '100%'
                        btnContainer.append(cancel)
                        btnContainer.append(agree)
                        btnContainer.style.display = 'flex'
                        btnContainer.style.justifyContent = 'space-evenly'
                        btnContainer.style.alignItems = 'center'
                        cancel.innerText = 'Cancel'
                        agree.innerText = 'Delete'
                        cancel.classList.add('cancel-btn')
                        agree.classList.add('delete-btn')
                        queryContainer.append(title)
                        queryContainer.append(question)
                        queryContainer.append(btnContainer)
                        main.insertAdjacentElement('afterend', queryContainer)
                        main.classList.toggle('active')


                    })

                    this.parentElement.parentElement.replaceWith(section)


                })


            })
        })

    })
}
const editBtn = document.querySelectorAll('.editBtn')
for (let each of editBtn) {
    each.addEventListener('click', function () {

        const section = document.createElement('section')
        section.style.height = '19%'
        section.classList.add('comment-box', 'replies-box')
        section.innerHTML = `
    <div class="comment-likes">
    <button class="plusLikeBtn"><img src="C:/Users/User/Desktop/interactive_comments/icons/icon-plus.png"
            alt="plus"></button>
    <span class="likes">0</span>
    <button class="minusLikeBtn"><img src="C:/Users/User/Desktop/interactive_comments/icons/icon-minus.png"
            alt="minus"></button>

</div>
<div class="comment-text self">
    <header>
        <div class="user-header">
            <img src="" alt="userImg" class="user-img">
            <span class="userName"> <span id="self">You</span></span>
            <span class="commentDate"></span>
        </div>
        <span>
            <button class="deleteBtn"><img
                    src="C:/Users/User/Desktop/interactive_comments/icons/icon-delete.png" alt="delete">
                Delete</button>
            <button class="editBtn"><img
                    src="C:/Users/User/Desktop/interactive_comments/icons/icon-reply.png" alt="edit">
                Edit</button>
        </span>
    </header>
    <textarea name="comment" id="newCommentTxt" cols="70" rows="4" placeholder="Add a comment"
    style="border-radius:12px;"></textarea>
    <button class="update" id="send" style="align-self:flex-end; margin:9px 0px;">Update</button>
</div>`

        const textarea = section.children[1].children[1]
        textarea.value = this.parentElement.parentElement.parentElement.children[1].innerText
        const plusBtn = section.children[0].children[0]
        const score = section.children[0].children[1]
        const minusBtn = section.children[0].children[2]
        const userImg = section.children[1].children[0].children[0].children[0]
        const userName = section.children[1].children[0].children[0].children[1]
        userImg.src = usedData.currentUser.image.png
        userName.innerText = usedData.currentUser.username
        plusBtn.addEventListener('click', function () {
            let interacted = parseInt(score.innerText)
            interacted++
            score.innerText = interacted
        })
        minusBtn.addEventListener('click', function () {
            let interacted = parseInt(score.innerText)
            interacted--
            if (interacted >= 0) {
                score.innerText = interacted
            }
        })

        const deleteBtn = section.children[1].children[0].children[1].children[0]
        // add listeners to delete, edit and send buttons
        deleteBtn.addEventListener('click', function () {
            const queryContainer = document.createElement('div')
            queryContainer.classList.add("query")
            const title = document.createElement('h3')
            title.style.fontSize = '19px'
            title.style.fontFamily = 'Rubik'
            title.innerText = 'Delete Comment'
            const question = document.createElement('p')
            question.style.fontSize = '14px'
            question.style.fontFamily = 'Rubik'
            question.style.margin = '0 10px'
            question.innerText = "Are you sure you want to delete this comment? This will remove the comment and can't be undone."
            const btnContainer = document.createElement('div')
            const cancel = document.createElement("button")
            const agree = document.createElement('button')
            cancel.addEventListener('click', function () {
                queryContainer.remove()
                main.classList.toggle('active')
                clickCounter = 0
            })
            agree.addEventListener('click', function () {
                section.remove()
                queryContainer.remove()
                main.classList.toggle('active')
                clickCounter = 0
            })
            btnContainer.style.width = '100%'
            btnContainer.append(cancel)
            btnContainer.append(agree)
            btnContainer.style.display = 'flex'
            btnContainer.style.justifyContent = 'space-evenly'
            btnContainer.style.alignItems = 'center'
            cancel.innerText = 'Cancel'
            agree.innerText = 'Delete'
            cancel.classList.add('cancel-btn')
            agree.classList.add('delete-btn')
            queryContainer.append(title)
            queryContainer.append(question)
            queryContainer.append(btnContainer)
            main.insertAdjacentElement('afterend', queryContainer)
            main.classList.toggle('active')


        })


        this.parentElement.parentElement.parentElement.parentElement.replaceWith(section)

        const updateBtn = section.children[1].children[2]
        updateBtn.addEventListener('click', function () {
            const section = document.createElement('section')
            section.classList.add('comment-box')
            section.innerHTML = `
        <div class="comment-likes">
        <button class="plusLikeBtn"><img src="C:/Users/User/Desktop/interactive_comments/icons/icon-plus.png"
                alt="plus"></button>
        <span class="likes">0</span>
        <button class="minusLikeBtn"><img src="C:/Users/User/Desktop/interactive_comments/icons/icon-minus.png"
                alt="minus"></button>

    </div>
    <div class="comment-text self">
        <header>
            <div class="user-header">
                <img style='width:40px;height:40px;' src="C:/Users/User/Desktop/interactive_comments/avatars/image-juliusomo.png" alt="userImg"
                    class="user-img">
                <span class="userName">juliusomo<span id="self">You</span></span>
                <span class="commentDate" id="replied-commentDate">15 Seconds Ago</span >
            </div >
        <span>
            <button class="deleteBtn"><img src="C:/Users/User/Desktop/interactive_comments/icons/icon-delete.png"
                alt="delete">
                Delete</button>
            <button class="editBtn"><img src="C:/Users/User/Desktop/interactive_comments/icons/icon-reply.png"
                alt="edit">
                Edit</button>
        </span>
        </header >
        <p class="comment" id="p">
          
        </p>
    </div >

`
            section.children[1].children[1].innerText = textarea.value
            const plusBtn = section.children[0].children[0]
            const score = section.children[0].children[1]
            const minusBtn = section.children[0].children[2]
            const userImg = section.children[1].children[0].children[0].children[0]
            const userName = section.children[1].children[0].children[0].children[1]
            userImg.src = usedData.currentUser.image.png
            userName.innerText = usedData.currentUser.username
            plusBtn.addEventListener('click', function () {
                let interacted = parseInt(score.innerText)
                interacted++
                score.innerText = interacted
            })
            minusBtn.addEventListener('click', function () {
                let interacted = parseInt(score.innerText)
                interacted--
                if (interacted >= 0) {
                    score.innerText = interacted
                }
            })

            const deleteBtn = section.children[1].children[0].children[1].children[0]
            // add listeners to delete, edit and send buttons
            deleteBtn.addEventListener('click', function () {
                const queryContainer = document.createElement('div')
                queryContainer.classList.add("query")
                const title = document.createElement('h3')
                title.style.fontSize = '19px'
                title.style.fontFamily = 'Rubik'
                title.innerText = 'Delete Comment'
                const question = document.createElement('p')
                question.style.fontSize = '14px'
                question.style.fontFamily = 'Rubik'
                question.style.margin = '0 10px'
                question.innerText = "Are you sure you want to delete this comment? This will remove the comment and can't be undone."
                const btnContainer = document.createElement('div')
                const cancel = document.createElement("button")
                const agree = document.createElement('button')
                cancel.addEventListener('click', function () {
                    queryContainer.remove()
                    main.classList.toggle('active')
                    clickCounter = 0
                })
                agree.addEventListener('click', function () {
                    section.remove()
                    queryContainer.remove()
                    main.classList.toggle('active')
                    clickCounter = 0
                })
                btnContainer.style.width = '100%'
                btnContainer.append(cancel)
                btnContainer.append(agree)
                btnContainer.style.display = 'flex'
                btnContainer.style.justifyContent = 'space-evenly'
                btnContainer.style.alignItems = 'center'
                cancel.innerText = 'Cancel'
                agree.innerText = 'Delete'
                cancel.classList.add('cancel-btn')
                agree.classList.add('delete-btn')
                queryContainer.append(title)
                queryContainer.append(question)
                queryContainer.append(btnContainer)
                main.insertAdjacentElement('afterend', queryContainer)
                main.classList.toggle('active')


            })

            this.parentElement.parentElement.replaceWith(section)


        })


    })
}