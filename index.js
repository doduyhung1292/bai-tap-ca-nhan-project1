var readlineSync = require('readline-sync');
var fs = require('fs');

var studentsData = [];

function readData() {
	var fileContents = fs.readFileSync('./data.json');
	studentsData = JSON.parse(fileContents);
}

class Student {
	constructor(name, age, address) {
		this.name = name;
		this.age = age;
		this.address = address
	}

	showStudent() {
		console.log("Ho va ten: " + this.name + ", tuoi: "+ this.age + " , que quan: " + this.address);
}

	addStudent() {
	
	var student = {
		hoTen: this.name,
		tuoi: parseInt(this.age),
		queQuan: this.address
	};
	studentsData.push(student);
	}

	showStudent20 () {
		if (student.tuoi == 20) {
		console.log("Ho va ten: " + student.hoTen + ", tuoi: "+ student.tuoi + " , que quan: " + student.queQuan);
}}

	countStudent() {
	for( var student of students) {
	if ((student.tuoi == 23) && (student.queQuan == "DN")) { cou +=1;}
	
	}
	console.log("so hoc sinh 23 tuoi va que DN: " + cou);
	}

	
}
function showMenu() {
	console.log("1. Hien thi hoc sinh");
	console.log("2. Hien thi hoc sinh 20 tuoi");
	console.log("3. So luong hoc sinh tuoi 23 va que o DN");
	console.log("4. Them hoc sinh moi");
	console.log("5. Luu va thoat");
	var option = readlineSync.question('> ');
	switch (option) {
		case '1': 
			for( student of studentsData) {
				var hs = new Student(student.hoTen, student.tuoi, student.queQuan);
				hs.showStudent();}
				showMenu(); break;

		case '2': for( student of studentsData) {
				if (student.tuoi == 20) {
				var hs = new Student(student.hoTen, student.tuoi, student.queQuan);
				hs.showStudent();}}
				 showMenu(); break;

		case '3': var cou = 0;
				for( var student of studentsData) {
				if ((student.tuoi == 23) && (student.queQuan == "DN")) { cou +=1;}
				
				}
				console.log("so hoc sinh 23 tuoi va que DN: " + cou);
	 			showMenu(); break;
		case '4': 	var hoTen = readlineSync.question('Ho va ten: ');
					var tuoi = readlineSync.question('Tuoi: ');
					var queQuan = readlineSync.question('Que quan: ');
					var hs = new Student(hoTen, tuoi, queQuan);
					hs.addStudent(); showMenu(); break;
		case '5': var content = JSON.stringify(studentsData);
					fs.writeFileSync('./data.json', content, {encoding: 'utf8'}); break;
		default: console.log('Wrong'); showMenu(); break;

	}
	}

function main() {
	readData();
	showMenu()

	
}

main();
