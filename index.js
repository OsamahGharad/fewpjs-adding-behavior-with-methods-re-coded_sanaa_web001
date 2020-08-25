// Your code here
class Cat {
  constructor(name,sex) {
    this.name=name;
    this.sex=sex;
  }

  function speak(){
    return `${this.name} says meow!`;
  }
}

class Dog {
  onstructor(name,sex) {
    this.name=name;
    this.sex=sex;
  }
  function speak(){
    return `${this.name} says woof!`;
  }
}

class Bird {
  onstructor(name,sex) {
    this.name=name;
    this.sex=sex;
  }
  function speak(){
    if(this.sex=="male"){
        return `It's me!${this.name} ,the parrot`;
    }
    else if(this.sex=="female"){
      eturn `${this.name} says squawk!`;
    }

  }
}
