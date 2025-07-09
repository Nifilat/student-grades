// Sample dataset
let students = [
  { id: 1, name: 'Alice Johnson', grades: [85, 92, 88] },
  { id: 2, name: 'Bob Smith', grades: [78, 81, 90] },
  { id: 3, name: 'Charlie Brown', grades: [95, 90, 93] },
  { id: 4, name: 'David Wilson', grades: [70, 80, 65] },
];

// Task 1: Calculate Average Grades
function calculateAverageGrades(students) {
  return students.map(student => {
    const sum = student.grades.reduce((accumulator, grade) => accumulator + grade, 0);
    const avg = sum / student.grades.length;
    return {
      id: student.id,
      name: student.name,
      averageGrade: Number(avg.toFixed(2)),
    };
  });
}

// Task 2: Find Top Student
function findTopStudent(students) {
  const studentsWithAvg = calculateAverageGrades(students);
  let topStudent = studentsWithAvg[0];
  studentsWithAvg.forEach(student => {
    if (student.averageGrade > topStudent.averageGrade) {
      topStudent = student;
    }
  });
  return topStudent;
}

// Task 3: Sort Students by Average Grade
function sortStudentsByGrade(students) {
  const studentsWithAvg = calculateAverageGrades(students);
  return studentsWithAvg.slice().sort((a, b) => b.averageGrade - a.averageGrade);
}


console.log('Average Grades:', calculateAverageGrades(students));
console.log('Top Student:', findTopStudent(students));
console.log('Sorted Students:', sortStudentsByGrade(students)); 