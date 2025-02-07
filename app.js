const dragItems =document.querySelector("list")
const leftEl =document.querySelector("box")
const rightEl =document.querySelector("box")

for(list in dragItems){

    list.addEventListener("dragstart",(event)=>{
        event.preventDefault()
       const dragstartitem= e.target
    })
    leftEl.addEventListener("dragover",(e)=>{
           
    })
    
    leftEl.addEventListener("drop",(e)=>{
               
        leftEl.appendChild(dragstartitem)
    })
    rightEl.addEventListener("dragover",(e)=>{
           
    })
    
    rightEl.addEventListener("drop",(e)=>{
               
        rightEl.appendChild(dragstartitem)
    })
}
