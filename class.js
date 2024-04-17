//리엑트할 때 많이 쓴데 알쓴신잡
/*
function User(first, last){
    this.firstname=first;
    this.lastname=last;

}

User.prototype.getFullName=function(){
    return `${this.firstname} ${this.lastname}`
}*/


//이렇게 쓰면 더 편하데 몇 버젼 이상 부터 되는거래 이게 좋음 포로토타입이랑 똑같이 나옴
class User{
    constructor(first,last){
        this.firstName=first;
        this.lastName=last;
    }
    getFullName(){
        return `${this.firstName} ${this.lastName}`
    }

}

const hong =new User('길동','홍');
console.log(hong);
console.log(hong.getFullName());


class Vehicle{
    constructor(name,wheel){
        this.name=name;
        this.wheel=wheel;
    }
}

class Bicycle extends Vehicle{
    constructor(name,wheel){
        super(name,wheel);
    }
}

class Car extends Vehicle{
    constructor(name,wheel,license){
        super(name,wheel);
        this.license=license;
    }
}

const v1=new Vehicle('운송수단',3);
console.log(v1);
const b1=new Bicycle('삼천리 자전거',2);
console.log(b1);
const c1=new Car('포르쉐',4,true);
console.log(c1);


