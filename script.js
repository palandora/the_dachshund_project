const left_fab = document.querySelector(".left_fab")
const right_fab = document.querySelector(".right_fab")
let fabs = []
fabs.push(left_fab, right_fab)

fabs.forEach(fab => {
    fab.addEventListener("click", (e) =>{
        console.log(e.target)
    }) 
})


