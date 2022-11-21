class Student {
  constructor(_name, _section) {
    this.name = _name;
    this.section = _section;
  }
}


class StudentsDb {
  constructor() {
    this.studentList = [];

    // seeding
    this.seeds();
  }

  create(_name, _section) {
    let student = new Student(_name.toLowerCase(), _section.toLowerCase());

    this.studentList.push(student);
  }

  retrieve(_name) {
    return this.studentList.find(student => student.name === _name.toLowerCase());
  }

  update(_studentOldData, _studentNewData) {
    let studentIndex = this.studentList.indexOf(this.retrieve(_studentOldData.name));

    this.studentList[studentIndex] = _studentNewData;
  }

  delete(_name) {
    let studentIndex = this.studentList.indexOf(this.retrieve(_name));

    return this.studentList.splice(studentIndex, 1);
  }

  list() {
    return this.studentList;
  }

  seeds() {
    let seed1 = new Student('donald', 'd');
    let seed2 = new Student('elon', 'e');
    let seed3 = new Student('ferdinand', 'f');

    this.studentList.push(seed1);
    this.studentList.push(seed2);
    this.studentList.push(seed3);
  }
}





// let correctUsername = "student@mail.com";
// let correctPassword = "discovery";

let correctUsername = "q";
let correctPassword = "q";

function auth(_username, _password) {
  return _username === correctUsername && _password === correctPassword;
}

function main(_numAttempts) {
  let ctrAttempts = _numAttempts;
  let flagOk = false;

  let db = new StudentsDb();

  do {
    let username = prompt(`Enter a username or email: (default: ${correctUsername})`);
    let password = prompt(`Enter a password: (default: ${correctPassword})`);

    if (auth(username, password)) {
      flagOk = true;

      alert(`Successfully login.`);

      let menuOption = 'x';
      do {
        let menus ="M E N U \r\r[ C ] - Create \r[ R ] - Retrieve \r[ U ] - Update \r[ D ] - Delete \r\r[ L ] - List Students \r[ X ] - Terminate";
        menus += "\r\rEnter your choice:";
        menuOption = prompt(menus).toLowerCase();

        // CREATE
        if(menuOption === 'c') {
          let name = prompt("Enter student name");
          let section = prompt("Enter section");

          db.create(name, section);
          
          console.log(db.list());
        } 

        // RETRIEVE
        else if(menuOption == 'r') {
          let queryName = prompt('Enter student name to be searched.');
          let searchResult = db.retrieve(queryName);
          if(searchResult === undefined) {
            alert(`${queryName} is not found.`)
          } else {
            alert(`Name: ${searchResult.name.toUpperCase()}\r\rSection: ${searchResult.section.toUpperCase()}`);
          }

          console.log(db.list());
        }

        // UPDATE
        else if(menuOption == 'u') {
          let queryName = prompt('Enter student name to be updated.');
          let searchResult = db.retrieve(queryName);
          if(searchResult === undefined) {
            alert(`${queryName} is not found.`)
          } else {
            let newName = prompt('Enter new name');
            let newSection = prompt('Enter new section');
            let studentData = searchResult;

            studentData.name = newName;
            studentData.section = newSection;

            db.update(searchResult, studentData);

            console.log(db.list());

            alert(`Update has been successful.`);
          }
        } 

        // DELETE
        else if(menuOption == 'd') {
          let queryName = prompt('Enter student name to be deleted.');

          console.log(db.delete(queryName));

          console.log(db.list());
        } 
        
        // LIST STUDENTS
        else if(menuOption == 'l') {
          let strList = "";

          db.list().forEach(element => strList += `Name: ${element.name.toUpperCase()} --\t Section: ${element.section.toUpperCase()}\r`);

          strList += `\rTotal: ${db.list().length}`;
          
          alert(strList);
        }

      } while (menuOption != 'x');

    } else {
      ctrAttempts -= 1;

      alert(`Login failed. You now have ${ctrAttempts} attempts left.`);
    }
  } while (ctrAttempts > 0 && !flagOk);

}

let attempts = 3;
main(attempts);
