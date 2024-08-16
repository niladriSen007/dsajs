class Rectangle{
    constructor(height,width){
        this.height = height
        this.width = width
    }

    get calcArea(){
        return this.height * this.width
    }

    set changeHeight(newHeight){
        this.height = newHeight
    }

    set changeWidth(newWidth){
        this.width = newWidth
    }

    *getSides(){
        yield this.height
        yield this.width
    }
}

const r1 = new Rectangle(10,20)
console.log(r1.calcArea)
r1.changeHeight = 100
console.log(r1.calcArea)

for(let side of r1.getSides()){
    console.log(side)
}