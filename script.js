let h1 = document.getElementsByTagName('div')
let box = document.querySelector('.box-main')

let lengthH1 = h1.length -1 

for (let i = 0; i <= lengthH1; i++) {    
    h1[i].addEventListener('dragstart',(event)=>{
        event.dataTransfer.setData('elemId', event.target.id)
    })
}


box.addEventListener('drop',(event)=>{
    let targetId = event.dataTransfer.getData('elemId')
    let targetElem = document.getElementById(targetId)
    targetElem.style.maxWidth = '100%'
    targetElem.style.borderRadius = '0'
    event.target.append(targetElem)
})


box.addEventListener('dragover',(event)=>{
    event.preventDefault()
})
