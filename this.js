console.log("this");

//this
//일반 함수는 호출 위치네 따라 this 정의
// 화살표 함수는 자신이 선언된  함수 범위에서 this 정의

const me={//객체 정의
	name :'한성탁',
	normal:function(){
		console.log(this.name)//전역변수의 name
	},
	arrow :()=>{
		console.log(this.name)//지역변수의 name
		
	}
};

me.normal();
me.arrow();

const you={
	name:'이승재',
	normal:me.normal,
	arrow:me.arrow
};
 you.normal();
 you.arrow();

 function User(name){
	this.name=name;
 };

User.prototype.normal=function(){
	console.log(this.name);
};
User.prototype.arrow=()=>{
	console.log(this.name);
};//이거 안나옴 화살표 함수라서

const hong=new User('홍길동');

hong.normal();
hong.arrow();

const timer={
	name:'홍길동',
	timeout : function(){
		setTimeout(function(){
			console.log(this.name)
		},2000)//여기 this를 정의 할 수 없댜 일반함수라서 this를 못 꺼내 온대
	}
};
const time2r={
	name:'홍길동',
	timeout : function(){
		setTimeout(()=>{
			console.log(this.name)
		},2000)//이거 나온데 왜 ?? 화살표함수 부분을 감싸는 샛타임함수가 또 있을 때 this를 꺼내 올수 있대
	}
};

timer.timeout();