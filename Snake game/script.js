let canvas= document.querySelector("canvas")   //to select the canvas
let pen=canvas.getContext("2d")

// pen.fillRect(0,0,70,70)    //create shape
// pen.clearRect(0,0,20,40)   //to delete any part of shape


let snakeCells=[[0,0]]
let cell=50
function draw(){
   for(let i of snakeCells){
    pen.fillStyle="red"        //fill color in shape
    pen.fillRect(i[0],i[1],cell,cell)  //create shape
   }
}
draw()
function update(){

}