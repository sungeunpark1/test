export default function getType(data){
    //data의 조금 더 상세한 데이터 타입
    return Object.prototype.toString.call(data); 

}
//중요!!!! 별표 다섯개
//export 내보낸다 default 가장 기본이 되는 함수로 만들어준데
//밖에서 입력 받아온 데이터를 연결해주는 의미이다 프로토타입도 데이터 타입을 알려주는거래 상세한 데이터 타입이ㄹ래