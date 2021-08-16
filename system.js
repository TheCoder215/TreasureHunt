class System {

    constructor(){

    }

    authenticate(a,b){
        textSize(50)
        fill("black")
        text(code,300,300)
        if(a === b.toUpperCase()){
            return true
        }

        else 
        return false
    }


}