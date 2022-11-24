import kaboom from "kaboom"

// initialize context
kaboom({
  width: 500,
  height: 500
})


// some functions :D
function Update(){
  onKeyPress("#", ()=>{
    debug.inspect = !debug.inspect
  })
}




scene("game", ()=>{
  Update()
  const player = add([
    rect(40, 40),
    pos(40, 400),
    color(255, 0, 0),
    area(),
    anchor("center")
  ])
})






// Go "game" AKA starts the game ;)
go("game")