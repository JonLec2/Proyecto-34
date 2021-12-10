class ground{
    constructor(){
        var options={
            isStatic:true
        }

        this.ground=Bodies.rectangle(650,590, 1300, 20, options)
        World.add(world, this.ground )
    }

    display(){
        fill(120, 120, 120)
        rectMode(CENTER)
        rect(this.ground.position.x, this.ground.position.y, 1300, 20)
    }
    

}