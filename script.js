// position button
window.onload = function() {
    queryBtn.style.top = (container.clientHeight - grid.clientHeight) / 4 - (queryBtn.clientHeight / 2) + "px"
}

const body = document.body
const container = document.createElement('div')
const queryBtn = document.createElement('button')
const grid = document.createElement('div')
const style = document.createElement('style')
let counter = 0
// document.getElementsByClassName("box").width = `calc(100% / ${boxesPerSide})`

body.appendChild(container)
container.appendChild(queryBtn)
container.appendChild(grid)
document.head.appendChild(style)

queryBtn.id = "query-btn"
container.id = "container"
grid.className = "grid"




// create grid
function makeGrid(boxesPerSide) {
    grid.innerText = ""


    style.innerHTML = `
        .box {
            width: calc(100% / ${boxesPerSide});
            height: calc(100% / ${boxesPerSide});
        }
    `
    for (let row = 1; row <= boxesPerSide; row++) {
        for (let col = 1; col <= boxesPerSide; col++) {
            let box = document.createElement('div')
            grid.appendChild(box)
            box.className = 'box' 
            box.counter = 0
            box.style.opacity = 1

            // create hover function on grid boxes
            box.addEventListener("mouseover", () => {
            box.classList.add("hovered")
            box.style.backgroundColor = getRandomColor()
            
          
            let currentOpacity = parseFloat(box.style.opacity);
            let newOpacity = currentOpacity - 0.1;
            box.style.opacity = newOpacity > 0 ? newOpacity : 0;
            
            })
            box.addEventListener("mouseout", () => {
            box.classList.remove("hovered")
            box.counter++
            })
            
    
            
        }
    }
}

function getRandomColor() {
    const r = Math.floor(Math.random() * 256) 
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256) 

    return `rgb(${r}, ${g}, ${b})`
}

let squares = 16
let gridCall = makeGrid(squares)


queryBtn.addEventListener("click", () => {
    squares = prompt("Enter number of boxes per side for grid")
    if (squares >= 1 && squares <= 100) {
        gridCall = makeGrid(squares)
    } else {
        alert("Input invalid")
    }
    
})
