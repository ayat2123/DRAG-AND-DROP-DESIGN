const dragItems =document.querySelector(".list")
const leftEl =document.querySelector(".box")
const rightEl =document.querySelector(".box")

dragItems.forEach(item => {
    item.addEventListener("dragstart",(event)=>{
       const dragstartitem= event.target
});
})
    leftEl.addEventListener("dragover",(event)=>{
        event.preventDefault()
    })
    
    leftEl.addEventListener("drop",(event)=>{
        event.preventDefault()
        leftEl.appendChild(dragstartitem)
    })
    rightEl.addEventListener("dragover",(event)=>{
        event.preventDefault()

    })
    
    rightEl.addEventListener("drop",(event)=>{
        event.preventDefault()
        rightEl.appendChild(dragstartitem)
    })
