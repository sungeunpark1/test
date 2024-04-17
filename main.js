import getType from "./getType";   //가져다 쓸거야 다른 js파일의 함수를
import random from "./getRandom";//가져다 쓸거야 다른 js파일의 함수를

console.log(typeof "test");//string

const h1El=document.querySelector('.test');
console.log(typeof h1El);//object
console.log(typeof null);//object
console.log(typeof {});//object
console.log(typeof []);//object



console.log(getType(1));//Object Number
console.log(getType('wqe'));//Object String
console.log(getType(null));//Object Null
console.log(getType({}));//Object Object
console.log(getType([]));//Object Array
/*
typeof  : 데이터 타입이 무엇인지 알려주는 명령어

[자바 데이터 타입]
숫자
문자
논리
배열
object  -null,{},Array
undefined
*/


/* 
산술연산자( +,-,*,/,%)


*/
console.log("=====산술연산자======");
console.log(1+5);

console.log("산술"+"연산자");
console.log("산술"+1);//산술1


console.log("=====할당연산자======");
//할당연산자(대입) = :변수에 데이터를 저장하기 위해서 사용
// const(상수 선언)
const a=10;
console.log(a);
//a=20; (불가능)


console.log("=====복합대입연산자======");
//복합대입연산자
var b=5;
b+=1;//b=b+1;
console.log(b);


console.log("=====비교연산자======");
//비교연산자(결과값이 true false로 나온다)
// >,<,>=,<=,==,!=

console.log(a>b);

const a1=1;
const b1=1;

/*
==  :두개짜리true 데이터 타입까지는 비교해주지 않는 데
=== :세개짜리는 데이터 타입까지 비교해준 데
*/
console.log(a1===b1);
console.log(1=="1");// == 두개짜리true 데이터 타입까지는 비교해주지 않는 데
function isEquals(x,y){
     return x===y// === 세개짜리는 데이터 타입까지 비교해준 데
}
console.log(isEquals("a","a"));
console.log(isEquals(1,"1"));


/*
!=  : 데이터 타입까지는 x
!== : 데이터 타입까지 비교해준다
*/
console.log(1!="1");
console.log(1!=="1");


console.log("=====논리연산자======");
/*
논리연산자
and or not
*/

const l1= 1===1;
const l2='AB'==='AB'
const l3=true;

console.log(l1);//true
console.log(l2);//true
console.log(l3);//true

console.log(l1 && l2 && l3);//true
console.log(true || !(true && false));//true

//조건문
console.log("=====조건문======");
if(1<2){
    console.log("참");
}else{
    console.log("거짓");
}

const num=random();
console.log(num);
if(num===0){
    console.log("0이야");
}else if(num%2===0){
    console.log("짝수야");
}else{
    console.log("홀수야");
}

/*
Switch
*/
console.log("=====switch 조건문======");
console.log(num);
switch(num){
    case 0:
        console.log("0이야");
        break;
    case 4:
        console.log("num>>4");
        break;
    case 6:
        console.log("num>>6");
        break;
    default:
        console.log("몰라~");

}


//삼항연산자
console.log("=====삼항연산자======");

console.log(1<2 ? '참':'거짓');

var data=1<2?'참':'거짓';
console.log(data);


console.log(num===0?'0이야':'');


/*
반복문
for(시작 ;종료 ;반복조건){}
*/
console.log("=====반복문======");
const ulEl=document.querySelector('ul');
console.log(ulEl);
for(let i=1;i<6;i++){
    console.log("i>>",i);
    //li태그를 일 단 만들어 주는거
    const li=document.createElement('li');
    //만들어둥 li태그를 부모 안에 자식으로 넣어주는 거
    //li.textContent=i;

    //console.log(li);
    //만들어둥 li태그를 부모 안에 자식으로 넣어주는 거
    if(i%2===0){
        li.addEventListener('click',function(){
            console.log(li.textContent=i);
        });
    }
    ulEl.appendChild(li);
}


/*
변수 유효범위
*/
console.log("=====변수 유효범위======");
function scope(){
    if(true){
        
        var v=123;//var는 함수 전체가 유효범위가 되서 이게 나와버리냉 원래 지역변수라서 안나오는게 정상이잖어 if문 밖의 콘솔에
    }
    console.log(v);
}

scope();

//형변환
//false로 인식(거짓 같은 값) 아랴 값들
//false, '', null, undefined, 0, -0, 0.0, -0.0, NaN(계산하지 못했다라는 의미)    //디폴트 데이터 거짓된 데이터
const v1 =1;
const v2='1';
console.log(v1===v2);

if(''){
    console.log(">>>true")
}


//문자를 숫자로 형변환
const v3="12";
console.log(typeof v3);
console.log(Number(v3));
console.log(typeof Number(v3));
console.log(parseInt(v3));
console.log(typeof parseInt(v3));

//실수로 데이터 형변환
console.log(parseFloat(v3));
console.log(typeof parseFloat(v3));

//숫자로 변활할 데이터가 없으면 NaN출력
console.log(parseInt("Hello"));//NaN(계산을 못함)이 출력


console.log(typeof +v3);//이렇게해도 숫자로 변환해준데


console.log(">>>" , typeof + "1아")//number로 나온데


// 숫자를 문자로 형변환
const v4=12;
console.log(v4.toString());


//함수

/*const sum=function (x,y){  //이러면 f2에만 담기고 다른 변수에 담을수 없어
    console.log(x+y);
    return x+y;
}
sum(10,7)*/
function sum(x,y){
    //console.log(x+y);
    if(x<2){
        return;
    }
    return x+y;
}
var fl =sum(10,5);//리턴값이 없는 함수는 변수에 저장x(undifined)
console.log(f1);

//