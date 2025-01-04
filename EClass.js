class  Car{
    constructor(cname,price){
        this.cname=cname;
        this.price=price;
    }
    display(){
        console.log("Display "+this.cname+" "+this.price)
    }
}

const  cp = new Car(1,1)
cp.display()
