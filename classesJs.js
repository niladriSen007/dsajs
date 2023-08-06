class Student{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    static collegeName = "Calcutta University"

    get getName(){
        return this.name;
    }

    set setAge(age){
        this.age = age
    }
}

const s1 = new Student("Nil",23)
console.log(s1.getName)
s1.setAge = 24
console.log(s1.age)
console.log(Student.collegeName)

