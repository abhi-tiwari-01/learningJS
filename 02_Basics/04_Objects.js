// Assiging Objects

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}

const obj3 = Object.assign({}, obj1, obj2);
// console.log(obj3);

// Using spread operator

const obj4 = {...obj1, ...obj2};
// console.log(obj4);


// console.log(Object.keys(obj4));
// console.log(Object.values(obj4));

const course = {
    courseName : "JS",
    coursePrice : 999,
    courseInstructor : "Hitesh Chaudhary"
}

// console.log(course.courseInstructor);

const {courseInstructor : teacher} = course //de-structuring 

console.log(teacher);