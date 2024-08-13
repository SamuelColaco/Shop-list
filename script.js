

const button = document.querySelector("button")
const img = document.querySelector(".trash-image")

button.addEventListener("click", ()=> {

    const list = document.querySelector("#list")
    const div1 = document.createElement("div")
    const div2  = document.createElement("div")
    const div3  = document.createElement("div")
    let span = document.createElement("span")
    const check = document.createElement('input')
    check.type = "checkbox"
    const input = document.querySelector("input[type = 'text']")

    
    let valor = input.value
    if(valor != "" && isNaN(Number(valor))){

        input.value = ""
        
        span.textContent = valor

        div3.classList.add("trash")
        const imgclone = img.cloneNode(true)
        imgclone.classList.add("trash-image")

        div3.appendChild(imgclone)
        div2.classList.add("name")
        div2.appendChild(check)
        div2.appendChild(span)
        div1.appendChild(div2)
        div1.appendChild(div3)
    
        list.appendChild(div1)
    }
    else if(valor ==  ""){
        alert("Escreva algo")
    }
    else if(!isNaN(Number(valor))){
        alert("Não utilize números")
        input.value = ""
    }
    else{
        alert("Erro inesperado")
    }

    
})

document.querySelectorAll(".trash-image").forEach((img) => img.addEventListener("click", () =>{
    const list = img.parentNode.parentNode
    
    list.style.display = "none"
}))
