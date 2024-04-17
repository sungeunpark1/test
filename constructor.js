console.log(54321);

//Member (객체를 하나 만든거래)
const test={
    firstName:'길동',//속성(property)
    lastname:'홍',
    getFullName:function(){
        return `${this.firstName} ${this.lastname}`;//느낌표 옆의 삐뚤어진 따옴표 (backtick,grave)을 사용해야한댜
    }//메서드(method)

};
console.log(test);
console.log(test.getFullName());

//이렇게하면 귀찮잖아 그래서 클래스를 사용한댜 아래
const han={
    firstName:'성탁',
    lastName:'한',
    getFullName:function(){
        return `${this.firstName} ${this.lastName}`;//느낌표 옆의 삐뚤어진 따옴표 (backtick,grave)을 사용해야한댜
    }
};


//리터럴 방식(클래스)
function user(first,last){
    this.firstName=first
    this.lastName=last
    this.getFullName=function(){
        return `${this.firstName} ${this.lastName}`;
    }
};
const hong=new user('길동','홍');//instance(객체)
const hang=new user('성탁','한');//애들이 생성자가 되는거래
console.log(hong);
console.log(hang);
//애들이 전부 객체처럼 들어간데 따로따로


//prototype 프로토타입:기능을 통일화해서 메모리를 효율적으로 관리하기 위해서 위의 리터럴 방식을 나눠서 적으거야
function user(first,last){
    this.firstName=first
    this.lastName=last

};
user.prototype.getFullName=function(){
    return `${this.firstName} ${this.lastName}`;
};

console.log(hong.getFullName());//대신 불러올 때는 이렇게 불러와야한데!!!!!
console.log(hang.getFullName());