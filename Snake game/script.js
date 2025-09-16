// let canvas = document.querySelector("canvas")   //to select the canvas
// let pen = canvas.getContext("2d")

// // pen.fillRect(0,0,70,70)    //create shape
// // pen.clearRect(0,0,20,40)   //to delete any part of shape


// let snakeCells = [[0, 0]]
// let cell = 50
// let direction = "right"
// let gameOver = false
// //to continuosly and simaltaneouly leep calling draw and update fuction at a set interval
// let id = setInterval(() => {
//    draw()
//    update()
// }, 1000)

// document.addEventListener("keydown", (e) => {    //"keydown" event::will be called when u click any arrow up or down button
//    if (e.key == "ArrowUp") {
//       direction = "up"
//    } else if (e.key == "ArrowDown") {
//       direction = "down"
//    } else if (e.key == "ArrowLeft") {
//       direction = "left"
//    } else {
//       direction = "right"
//    }
// })
// function draw() {               //drawing shapes
//    if (gameOver == true) {          //stop the further game 
//       clearInterval(id)
//       return
//    }
//    pen.clearRect(0, 0, 1100, 500)    //to remove the previous shape from ui
//    for (let i of snakeCells) {

//       pen.fillStyle = "red"        //fill color in shape
//       pen.fillRect(i[0], i[1], cell, cell)  //create shape
//    }
// }

// function update() {     //changes in the coordinates
//    let headX = snakeCells[snakeCells.length - 1][0]  //x coordinate value
//    let headY = snakeCells[snakeCells.length - 1][1]     //y coordinate value

//    //to move left to right:: in all directions
//    if (direction === "right") {
//       let newX = headX + cell
//       let newY = headY
//       if (newX == 1100) {            //if snake clashes to the wall of game
//          gameOver = true
//       }
//    } else if (direction === "left") {
//       newX = headX - cell
//       let newY = headY
//       if (newX < 0) {
//          gameOver = true
//       }
//    } else if (direction === "up") {
//       newX = headX
//       newY = headY - cell
//       if (newY < 0) {
//          gameOver = true
//       }
//    } else {
//       newX = headX
//       newY = headY + cell
//       if (newY == 500) {
//          gameOver = true
//       }
//    }

//    snakeCells.push([newX, newY])

//    snakeCells.shift()         //to keep deleting first element of the 2d array
// }



 let canvas=   document.querySelector('canvas')
    let pen=    canvas.getContext("2d")
 
    let snakeCells=[[0,0]]
    let cell=50
    let direction="right"
    let gameOver=false
   let score=0
let random=generateRandomCell()


    let id=   setInterval(()=>{
      draw()
      update()

    },200)
       document.addEventListener("keydown",(e)=>{
        // console.log("helllo");
        // console.log(e);
        if(e.key=="ArrowUp"){
          direction='up'
        }else if(e.key=='ArrowDown'){
          direction='down'
        }else if(e.key=='ArrowLeft'){
          direction='left'
        }else{
          direction='right'
        }

       })
    function draw(){
      if(gameOver==true){
        clearInterval(id)
     
       pen.font = '40px sans-serif';
           pen.fillText('Game over', 50, 150);
        return 
      }
      pen.clearRect(0,0,1100,500)
        for(let i of snakeCells){
        
              pen.fillStyle="yellow"
            pen.fillRect(i[0],i[1],cell,cell)
        }

        pen.font = '40px sans-serif';
        pen.fillText(`${score}`,150,50);
               pen.fillStyle="white"
        pen.fillRect(random[0],random[1],cell,cell)
    }

    function update(){
     let headX=   snakeCells[snakeCells.length-1][0]
        let headY=  snakeCells[snakeCells.length-1][1]
         
         let newX
            let newY
            if(direction=='right'){
              newX=headX+cell
              newY=headY
              if(newX==1100){
                gameOver=true
              }
            }
            else if( direction=="left"){
              newX=headX-cell
              newY=headY
              if(newX<0){
                gameOver=true
              }
            }
            else if(direction=='up'){
              newX=headX
              newY=headY-cell
              if(newY<0){
                gameOver=true
              }

            }else{
              newX=headX
              newY=headY+cell
              if(newY==500){
                gameOver=true
              }
            }
     
            snakeCells.push([newX,newY])
       
            if(newX==random[0] && newY== random[1]){
              random=generateRandomCell()
              score+=1
            }
            else{
              snakeCells.shift()

            }
        
         
           


    }

    function generateRandomCell() {
  return [
    Math.round((Math.random()*(1050))/cell)*cell,
    Math.round((Math.random()*(450))/cell)*cell
  ]
}

console.log(generateRandomCell());



