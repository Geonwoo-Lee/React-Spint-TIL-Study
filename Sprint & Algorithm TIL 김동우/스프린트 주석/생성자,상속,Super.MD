### 생성자(Constructor)

constructor 메소드는 class 내에서 객체를 생성하고 초기화하기 위한 메소드 입니다.

```
class Hello {
  constructor() {
    this.name = 'Hello World';
  }
}

const hello1 = new Hello();

console.log(hello1.name); 
// 실행 결과 Hello World

```


### extends
extends 클래스를 다른 클래스의 자식으로 만들기 위해서 class 선언식에 사용됩니다.
### super 부모 클래스로부터 상속받은 필드나 메소드를 자식 클래스에서 참조하는데 사용하는 참조 변수 입니다.

### 사용 예시 

```
class Grub{
  constructor() {
    this.color = 'pink';
}
Grub 클래스의 자식으로 Bee클래스를 선언
class Bee extends Grub {
  constructor() {
    super();
    this.age = 5;
  }
}

```
### 전체 코드 설명

Grub이라는 클래스 내에 객체를 생성을 하기 위해서
constructor 메소드를 사용한다. 중괄호 필드 안에
this를 사용해 객체 값을 설정을 해준다.

extends를 사용해서 grub의 자식클래스 라는걸 정의를 해준다.
super()메소드를 사용해서 부모클래스인 grub에서 상속받은 객체나 필드를 bee에서 사용할 수 있게 해준다.