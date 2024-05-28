function Student(studentFirstName, studentLastName){
	this.firstName = studentFirstName;
	this.lastName = studentLastName;
	this.grades = {};
}

Student.prototype.addGrade = function(subject, grade){
	const currentGrades = this.grades[subject] ? this.grades[subject] : [];
	this.grades[subject] = [...currentGrades, grade]
}

Student.prototype.getAverageGrade = function(subject){
	if (subject) {
		if (this.grades[subject]) {
			return this.grades[subject].reduce((grade, currentValue) => currentValue + grade) / this.grades[subject].length;
		}
	}
	
	let totalGrades = 0;
	let totalGradesValue = 0;
	
	for (const subject in this.grades) {
		totalGrades = totalGrades + this.grades[subject].length;
		totalGradesValue = totalGradesValue + this.grades[subject].reduce((grade, currentValue) => currentValue + grade)
	}
	
	return totalGradesValue / totalGrades;
}

const student = new Student('John', 'Doe');
student.addGrade('maths', 4);
student.addGrade('maths', 6);
student.addGrade('maths', 2);
student.addGrade('maths', 1);
student.addGrade('english', 3);

console.log(student)
console.log(student.getAverageGrade('maths'));
console.log(student.getAverageGrade());
