let SPEED = 0.005
let LIMIT = 1

export default class Paddel{

    constructor(paddelElem){

        this.paddelElem = paddelElem
        this.reset()

    }

    get position(){
    
        return parseFloat(getComputedStyle(this.paddelElem).getPropertyValue("--position"))

    }

    set position(value){

        this.paddelElem.style.setProperty("--position",value)
        

    }

    rect(){

        return this.paddelElem.getBoundingClientRect()

    }

    reset(){

        this.position = 50

    }

    update(delta,ballHeight,score){

        if(score>LIMIT){
            SPEED+= 0.0008
            LIMIT = score
            
        }
        this.position += SPEED * delta *(ballHeight- this.position)

    }

}