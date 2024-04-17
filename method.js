console.log(1234);

//기명함수(이름있는 함수)
function sum(x,y){
    
    return x+y;

}


/*원래함수
function double(x){
    return x*2;
};

console.log(double(5));
*/

//익명함수
const double=function(x){
    return x*2;
};
console.log(double(5));

/*화살표함수(함수 내용이 단순할때 사용 (함수의축약형)
const doubleArrow=(x)=>{
    return x*2;
};
console.log(doubleArrow(5));*/



const doubleArrow=(x,y)=>x*y;//좀 더 축약형 (자바에서는 람다함수라고한다)
console.log(doubleArrow(5,3));

//매개변수가 하나 일때는 가로() 없앨 수 있다
const doubleArrow2=x=>x;
console.log(doubleArrow(5));

//가로가{} 있으면 리턴값이 없는거로 인식
const doubleArrow3=(x,y)=>{x*y};
console.log(doubleArrow3(7,3));//undifind

//간단히 삼항연산자도 가능
const doubleArrow4=x=>(x%2===0)?true:false;
console.log(doubleArrow4(7));

//Object,map(자바)구조
const doubleArrow5=x=>({'name':'홍길동'});
console.log(doubleArrow5(7));


//즉시실행함수(IIFE,(Immediately-Invoked Function Expression))
//함수 선언과 동시에 실행
//세미클론 잘 적어 줘야함 안 그러면 가로가 많아서 컴퓨터가 인식을 잘 못함

//첫번째
const a=7;
(function(){
    console.log(a*4);
})();
(function(){
    console.log(a*7);
})();

//두번째 구조 이걸 많이쓴데 위에껀 가로가 둥둥 떠다녀서 읽기 불편하댜
(function(){
    console.log(a*8);
}());

//함수 호이스팅(Hoisting)
//함수 선언부가 유효범위 최상단으로 끌어올려지는 현상

const b=4;
/*test();
const test=function(){
    console.log(b+5);
}*/
//원래 이렇게하면 안돼 만들어지기 전에 올렸으니까


//이 구조로 함수를 만든다면 함수 호이스팅으로 통해 함수가 최상단으로 올라가서 가능해진데
test2();
function test2(){
    console.log(b+5);
}

//타이머 함수(몇 초 후에 실행 할 껀지 어느시간 간격마다 실핼 할지 얼마동안 실행할지 어느 시간에 종료할지)

//setTimeout(함수,시간):일정 시간 후 함수 실행
//setInterval(함수,시간):시간 간격마다 함수 실행
//clearTimeout():설정된 Timeout 함수를 종료
//clearInterval():설정된 Interval함수를 종료

//setTimeout
setTimeout(function(){
    console.log('3초 지났어!!!');
},3000);

//화살표함수버젼
const timer=setTimeout(() => {
    console.log('3초 지났어!!!');
},3000);

//clearTimeout
//누르면 3초 지나고 나오는거 안나오게 해줄거야
const h1El=document.querySelector('.test');
h1El.addEventListener('click',()=>{
    clearTimeout(timer);
    clearTimeout(timer2);
    console.log('종료');
});


//setInterval
const timer2=setInterval(()=>{
    console.log('!!!!!');
},1000);


//콜백함수
//함수의 인수로 사용되는 함수
//timeout인수안에 함수가 들어가 있는거임 잘봐바!!!
function timeout(cb){
    setTimeout(()=>{
        console.log('콜백함수')
        cb()
    },3000)
};

timeout(()=>{
    console.log('종료1111');
})

