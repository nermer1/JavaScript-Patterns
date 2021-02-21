/**
 * 2장 기초
 * 
 * 소프트웨어 버그를 고치는 비용은 시간이 지날수록 커진다. 시간이 지날 수록 기억에서 없어지기 때문
 * 1. 문제를 다시 학습하고 이해하는 데 걸리는 시간
 * 2. 이 문제를 해결하는 코드를 이해하는 데 걸리는 시간
 * 
 * 유지보수 가능한 코드의 특징
 * 1. 읽기 쉽다.
 * 2. 일관적이다.
 * 3. 예측 가능하다.
 * 4. 한 사람이 작성한 것처럼 보인다.
 * 5. 문서화되어 있다.
 */

 /**
  * 전역 변수 최소화
  * 전역 객체가 존재 어떤 함수에도 속하지 않고 this를 사용하면 전역 객체에 접근
  * 
  */

  /* myglobal = "hello"; // 안티패턴
  console.log(myglobal); // "hello"
  console.log(window.myglobal); // "hello"
  console.log(window["myglobal"]); // "hello"
  console.log(this.myglobal); // "hello" */

  /**
   * 외부 코드를 가져올 경우 전역 변수가 동일할 수 있음, 다른 결과를 초래함
   */

   /**
    * 암묵적 전역
    */

    function sum(x, y) {
        // 안티 패턴, 암묵적 전역
        result = x + y;
        return result;
    }

    console.log(sum(1, 1));