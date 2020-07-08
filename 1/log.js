// 전달된 모든 매개변수를 출력하는 log() 메서드
// 전달된 객체를 열거하고 모든 프로퍼티를 출력하는 dir() 메서드
// 콘솔에 직접 입력은 생략 가능

console.log('test', 1, {}, [1,2,3]);
console.dir({one:1, two: { three: 3}});

window.name === window['name']; // true

console.log(window.name === window['name']);