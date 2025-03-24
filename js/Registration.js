const firebaseConfig = {
  apiKey: "AIzaSyC6EDh3Fj5bNA7QIKwbQIqr4w5mX_LFoUQ",
    authDomain: "studentsdb-0001.firebaseapp.com",
    projectId: "studentsdb-0001",
    storageBucket: "studentsdb-0001.firebasestorage.app",
    messagingSenderId: "880808003834",
    appId: "1:880808003834:web:df40e69d3f8d824289e143",
    measurementId: "G-7JEQQFKM4Q"
};

// Firebase অ্যাপ ইনিশিয়ালাইজ করুন
firebase.initializeApp(firebaseConfig);

// Firebase Realtime Database রেফারেন্স তৈরি করুন
const database = firebase.database();


// variables
const studentName = document.querySelector("#studentName");
const studentNameerr = document.querySelector("#studentNameerr");

const fatherName = document.querySelector("#fatherName");
const fatherNameerr = document.querySelector("#fatherNameerr");

const motherName = document.querySelector("#motherName");
const motherNameerr = document.querySelector("#motherNameerr");

const mobileNumber = document.querySelector("#mobileNumber");
const mobileNumbererr = document.querySelector("#mobileNumbererr");

const village = document.querySelector("#village");
const villageerr = document.querySelector("#villageerr");

const gender = document.querySelector("#gender");
const gendererr = document.querySelector("#gendererr");

const Whichclass = document.querySelector("#Whichclass");
const Whichclasserr = document.querySelector("#Whichclasserr");

const section = document.querySelector("#section");
const sectionerr = document.querySelector("#sectionerr");

const roll = document.querySelector("#roll");
const rollerr = document.querySelector("#rollerr");

const passwordFild = document.querySelector("#passwordFild");
const passwordFilderr = document.querySelector("#passwordFilderr");

const emailaddress = document.querySelector("#emailaddress");
const emailaddresserr = document.querySelector("#emailaddresserr");

let allStudents = [];
let ClassOneList = [];
let ClassTwoList = [];
let ClassThreeList = [];
let ClassFourList = [];
let ClassFiveList = [];
const allStudentBox = document.querySelector(".allStudentBox")

// set studentName
function setStudentName() {studentNameerr.style.color = "#000000";}
function setfatherName() {fatherNameerr.style.color = "#000000";}
function setmotherName() {motherNameerr.style.color = "#000000";}
function setmobileNumber() {mobileNumbererr.style.color = "#000000";}
function setemailaddress() {emailaddresserr.style.color = "#000000";}
function setvillage() {villageerr.style.color = "#000000";}
function setgender() {gendererr.style.color = "#000000";}
function setWhichclass() {Whichclasserr.style.color = "#000000";}
function setsection() {sectionerr.style.color = "#000000";}
function setroll() {rollerr.style.color = "#000000";}
function setpasswordFild() {passwordFilderr.style.color = "#000000";}


function Redirect(){
  window.location.href = "student.html"
}





function readData() {
    allStudents = [];
    ClassOneList = [];
    ClassTwoList = [];
    ClassThreeList = [];
    ClassFourList = [];
    ClassFiveList = [];
    const usersRef = database.ref("students"); 
    usersRef.once("value")
      .then((snapshot) => {
        const users = snapshot.val();
        
        snapshot.forEach(element => {
          allStudents.push(element);
          
          // Class ten Student add
          if(element.val().Whichclass == 1){
            ClassOneList.push(element);
          }
          if(element.val().Whichclass == 2){
            ClassTwoList.push(element);
          }
          if(element.val().Whichclass == 3){
            ClassThreeList.push(element);
          }
          if(element.val().Whichclass == 4){
            ClassFourList.push(element);
          }
          if(element.val().Whichclass == 5){
            ClassFiveList.push(element);
          }
        });
        
        allStudents.map((student)=>(
          allStudentBox.innerHTML += `
                  <tr onClick="Redirect()">
                    <td>${student.val().name}</td>
                    <td>${student.val().roll}</td>
                    <td>Class ${student.val().Whichclass}</td>
                  </tr>
          `
        ))
        document.querySelector(".total").innerHTML = `
                <tr>
                  <th>Total Student : ${allStudents.length}</th>
                </tr>
        `
      })
      .catch((error) => {
        console.error("ডেটা পড়তে সমস্যা:", error);
      });
  }




function writeData() {

    const newUserRef = database.ref("students").push();
    newUserRef.set({
      name: studentName.value,
      email: emailaddress.value,
      mobileNumber: mobileNumber.value,
      fatherName: fatherName.value,
      motherName: motherName.value,
      village: village.value,
      gender: gender.value,
      Whichclass: Whichclass.value,
      section: section.value,
      roll: roll.value,
      password: passwordFild.value
    })
    .then(() => {
      console.log("ডেটা সফলভাবে সেভ হয়েছে!");
    })
    .catch((error) => {
      console.error("ডেটা সেভ করতে সমস্যা:", error);
    });
  }
