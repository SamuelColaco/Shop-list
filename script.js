

const button = document.querySelector("button")
const img = document.querySelector(".trash-image")
const list = document.querySelector("#list")
const x = document.querySelector(".cancel")
const menssage = document.querySelector(".delete-alert") 

button.addEventListener("click", ()=> {
    const div1 = document.createElement("div")
    const div2  = document.createElement("div")
    const div3  = document.createElement("div")
    let span = document.createElement("span")
    const check = document.createElement('input')
    check.type = "checkbox"
    check.classList.add("checkbox")
    const input = document.querySelector("input[type = 'text']")


    const divExtra = document.createElement("div")

    
    let valor = input.value
    if(valor != "" && isNaN(Number(valor))){

        input.value = ""
        
        span.textContent = valor

        div3.classList.add("trash")
        const imgclone = img.cloneNode(true)
        

        div3.appendChild(imgclone)

        div2.classList.add("name")
        divExtra.appendChild(check)
        div2.appendChild(divExtra)
        div2.appendChild(span)
        div1.appendChild(div2)
        div1.appendChild(div3)
        div1.id = "list-items"
    
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

list.addEventListener("click", (event) => {
    if(event.target.classList.contains("trash-image")){
         const lisTarget = event.target.parentNode.parentNode

         lisTarget.style.display = "none"

         menssage.style.display = "inherit"    

    }
})

x.addEventListener("click", () =>{
    const warning = x.parentNode.parentNode

    warning.style.display = "none"

})

list.addEventListener("click", (event) => {
    if(event.target.classList.contains("checkbox")){

        const bg = getComputedStyle(event.target).backgroundColor
        const bgSecondary = "var(--bg-secondary)"
        const colorBrand = "var(--color-brand)"

        if(bg === "rgb(0,0,0)" || bg === bgSecondary){

            event.target.style.backgroundColor =  colorBrand
            event.target.style.border = "2px solid " + colorBrand

        }
        else{
            event.target.style.backgroundColor = bgSecondary
            event.target.style.border = "2px solid var(--border-primary)"
        }
    }
})

