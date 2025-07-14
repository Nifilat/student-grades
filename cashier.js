// Sample dataset
let students = [
  { id: 1, name: 'Alice Johnson', grades: [85, 92, 88] },
  { id: 2, name: 'Bob Smith', grades: [78, 81, 90] },
  { id: 3, name: 'Charlie Brown', grades: [95, 90, 93] },
  { id: 4, name: 'David Wilson', grades: [70, 80, 65] },
];

// Task 1: Calculate Average Grades
function calculateAverageGrades(students) {
    if (!Array.isArray(students)) {
        throw new Error('Students must be an array');
    }
    if (students.length === 0) {
        throw new Error('Students array cannot be empty');
    }

    return students.map(student => {
        const { id, name, grades } = student;

        if (
            typeof id === 'undefined' ||
            typeof name !== 'string' ||
            !Array.isArray(grades) ||
            grades.length === 0 ||
            !grades.every(grade => typeof grade === 'number' && !isNaN(grade))
        ) {
            throw new Error('Each student must have a valid id, name, and at least one grade');
        }

        const avg = grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
        return {
            id,
            name,
            averageGrade: Math.round(avg * 100) / 100
        };
    });
}

// Task 2: Find Top Student
function findTopStudent(students) {
  
  if (!Array.isArray(students)) {
    throw new Error('Students must be an array');
  }
  if (students.length === 0) {
    throw new Error('Students array cannot be empty');
  }
  const studentsWithAvg = calculateAverageGrades(students);
  let topStudent = studentsWithAvg[0];
  studentsWithAvg.forEach(student => {
    if (student.averageGrade > topStudent.averageGrade) {
      topStudent = student;
    }
  });
  return topStudent;
}

// Task 3: Sort Students by Average Grade in Descending Order
function sortStudentsByGrade(students) {
  const studentsWithAvg = calculateAverageGrades(students);
  return studentsWithAvg.slice().sort((a, b) => b.averageGrade - a.averageGrade);
}


console.log('Average Grades:', calculateAverageGrades(students));
console.log('Top Student:', findTopStudent(students));
console.log('Sorted Students:', sortStudentsByGrade(students)); 