// let roll;
// let sem;
// let sub;
// let week;
// let ip;

// window.onload = () => {
//   let save_roll = localStorage.getItem("roll1");
//   document.getElementById("roll").value = save_roll;
// };

// const SEM1 = {
//   "PYTHON PROGRAMMING LAB": "ACSC02",
//   "Basic Electrical Engineering Laboratory": "AEEC04",
//   "Engineering Workshop Practice": "AMEC04",
// };

// const SEM2 = {
//   "English Language and Communication Skills Laboratory ": "AHSC04",
//   "Physics Laboratory": "AHSC05",
//   "Programming for Problem Solving using C Laboratory": "ACSC05",
// };
// const SEM3 = {
//   "Data Structures Laboratory": "ACSC10",
//   "Programming with Objects Laboratory": "AITC03",
//   "Advanced Python Programming Laboratory": "ACSC11",
// };

// const SEM4 = {
//   "Database Management Systems Laboratory": "AITC07",
//   "Design and Analysis of Algorithms Laboratory": "ACSC15",
//   "Linux Programming Laboratory": "ACSC16",
// };
// const SEM5 = {
//   "Object Oriented Software Design Laboratory ": "ACSC21",
//   "Web Application Development Laboratory": "AITC10",
// };

// const SEM6 = {
//   "DMKD LAB": "ACIC08",
//   "STL LAB": "ACIC09",
// };

// // fetch('https://api.ipify.org?format=json')
// // .then(response => response.json())
// // .then(data => {
// //   console.log(`Your public IP address is: ${data.ip}`);
// //  })

// fetch("http://ip-api.com/json/")
//   .then((response) => response.json())
//   .then((data) => {
//     ip = `${data.query}`;
//     localStorage.setItem("ip", ip);
//     console.log(ip);
//   });

// let subb;

// document.getElementById("btn").onclick = function () {
//   let ip_address = localStorage.getItem("ip");

//   roll = document.getElementById("roll").value;
//   localStorage.setItem("roll1", roll);

//   sem = document.getElementById("sem").value;
//   sub = document.getElementById("sub").value;
//   week = document.getElementById("week").value;
//   roll = roll.toUpperCase();
//   subb = eval(sem)[sub];
//   if (roll.includes("95")) {
//     // return `https://iare-data.s3.ap-south-1.amazonaws.com/uploads/STUDENTS/${roll}/LAB/${sem}/${eval(subjects[sub])}/${roll}_week${week}.pdf`;

//     let url = `https://iare-data.s3.ap-south-1.amazonaws.com/uploads/STUDENTS/${roll}/LAB/${sem}/${subb}/${roll}_week${week}.pdf`;
//     console.log(url);
//     localStorage.setItem("url", url);

//     window.open("final.html");
//   } else {
//     return alert("Value Incorrect kcpd!");
//   }

//   // /.catch(error => {
//   //       console.error('Error:', error);
//   //     });

// //   const options = {
// //       method: 'POST',
// //       headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
// //       body: JSON.stringify({
// //           text: `<b>🗃️ New Request Served</b>\n\nRoll numeber: ${roll}\n\nSemester: ${sem}\n\nSubject: \n${sub}\n\nWeek no:\n${week}\n\nIp:\n${ip}`,
// //           parse_mode: 'html',
// //           chat_id: '1325450350'
// //       })
// //   };

// //   const options1 = {
// //     method: "POST",
// //     headers: { Accept: "application/json", "Content-Type": "application/json" },
// //     body: JSON.stringify({
// //       text: `<b>🗃️ New Request Served</b>\n\nRoll numeber: ${roll}\n\nSemester: ${sem}\n\nSubject: \n${sub}\n\nWeek no:\n${week}`,
// //       parse_mode: "html",
// //       chat_id: "1325450350",
// //     }),
// //   };

//   //  fetch('https://api.telegram.org/bot6280178277:AAGhnQij-bOp6EdZ9mnelz2J-moJjmJI9PY/sendMessage', options1)
//   //      .then(response => response.json())
//   //      .then(response => console.log(response))
//   //      .catch(err => console.error(err));

// //     fetch('https://api.telegram.org/bot6280178277:AAGhnQij-bOp6EdZ9mnelz2J-moJjmJI9PY/sendMessage?chat_id=1325450350&text=%3CEnter%20your%20text%20here%3E')
// //    .then(response => response.json())
// //    .then(json => console.log(JSON.stringify(json)))

// //    fetch('https://api.telegram.org/bot6280178277:AAGhnQij-bOp6EdZ9mnelz2J-moJjmJI9PY/sendMessage?chat_id=1325450350&text=%3CEnter%20your%20text%20here%3E', {
// //     method: 'GET',
// //     headers: {
// //         'Accept': 'application/json',
// //     },
// // })
// //    .then(response => response.json())
// //    .then(response => console.log(JSON.stringify(response)))




// const options1 = {
//     method: 'POST',
//     headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
//     body: JSON.stringify({
//         text: `<b>🗃️ New Request Served</b>\n\nRoll numeber: ${roll}\n\nSemester: ${sem}\n\nSubject: \n${sub}\n\nWeek no:\n${week}\n\nIp:\n${ip}`,
//         parse_mode: 'html',
//         chat_id: '-1001683760687'
//     })
// };

// const options = {
//     method: 'POST',
//     headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
//     body: JSON.stringify({
//         text: `<b>🗃️ New Request Served</b>\n\nRoll numeber: ${roll}\n\nSemester: ${sem}\n\nSubject: \n${sub}\n\nWeek no:\n${week}\n\nIp:\n${ip}`,
//         parse_mode: 'html',
//         chat_id: '1325450350'
//     })
// };

//    fetch('https://api.telegram.org/bot5488586515%3AAAGJRKKp7FWjOpEmgkHcGSNX2bdqMiOOvGI/sendMessage', options1)
//        .then(response => response.json())
//        .then(response => console.log(response))
//        .catch(err => console.error(err));


// fetch('https://api.telegram.org/bot6280178277:AAGhnQij-bOp6EdZ9mnelz2J-moJjmJI9PY/sendMessage', options)
//        .then(response => response.json())
//        .then(response => console.log(response))
//        .catch(err => console.error(err));
// };

// document.addEventListener("contextmenu", (event) => event.preventDefault());

// function sub_sem() {
//   semester = document.querySelector("#sem").value;
//   let html = "";
//   for (let i = 0; i < Object.keys(eval(semester)).length; i++) {
//     line = `<option value="${Object.keys(eval(semester))[i]}">${
//       Object.keys(eval(semester))[i]
//     }</option>`;
//     html += line;
//   }
//   //console.log(html);
//   document.getElementById("sub").innerHTML = html;
// }









if (localStorage.getItem('name') && localStorage.getItem('email')) {
  document.getElementById('name').value = localStorage.getItem('name');
  document.getElementById('email').value = localStorage.getItem('email');
}


document.onkeydown = function(e) {
  if (event.keyCode == 123) {
      return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
      return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
      return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
      return false;
  }
  if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
      return false;
  }
}

document.getElementById("submit").addEventListener("click", submit, false);

console.log("Loading Modules...");

var name;
var email;
var semester;
var subjects;


const sem_1 = {
  "Basic Electrical Engineering": "https://drive.google.com/drive/folders/1Kw71In2qjQcBirw0CX-KYijCJVftmo1D?usp=sharing",
  "Chemistry": "https://drive.google.com/drive/folders/1OAsIsEQiRV_1QyCSK0xyaBEIL62a2hYi?usp=sharing",
  "Linear Algebra and Calculus": "https://drive.google.com/drive/folders/1T9ZuiW5VDPLNh1xmV65H1csYqQctvAea?usp=sharing",
  "Python Programming": "https://drive.google.com/drive/folders/19lgP7PAEsnxfPLN3vtI4BcpCItzXOCEP?usp=sharing",
}

const sem_2 = {
  "Applied Physics": "https://drive.google.com/drive/folders/1w_RWtedEJkfKVbrmLqWWxw16Y9Hs0mDr?usp=sharing",
  "C Programming": "https://drive.google.com/drive/folders/1KGIOKle0UEY2MpG0hL_uRIiuf9ndJyIQ?usp=sharing",
  "Essence of Indian Traditional Knowledge": "https://drive.google.com/drive/folders/1CLsW4jqJ7jYwFKRo6Vd1S_SalQ9wrecK?usp=sharing",
  "English": "https://drive.google.com/drive/folders/1lCgLCZjyMwrx2n19ZTwGGMqKivFySL86?usp=sharing",
  "Probability and Statistics": "https://drive.google.com/drive/folders/1xvI-9IlHnb06Egh1Hg1nCeVIovQJNyud?usp=sharing",
}

const sem_3 = {
  "Analog & Digital Electronics": "https://drive.google.com/drive/folders/1YjgNihMM9dOjEgsFsIUXkEIpfpabqmbF?usp=sharing",
  "Computer Organization and Architecture": "https://drive.google.com/drive/folders/1X3v2OCHlsF-ssEf1pXl_aRrlBFPSyrmE?usp=sharing",
  "Data Structures": "https://drive.google.com/drive/folders/10WkDtmwUqgnvqgxjUGschQ3PoVHepP0g?usp=sharing",
  "Discrete Mathematical Structures": "https://drive.google.com/drive/folders/1YPNE-BNzRvkoeOwjq38MIH_ejV1IiqJs?usp=sharing",
  "Java Programming": "https://drive.google.com/drive/folders/1GWHRvQ4W-UoICZsE3s2o5JdZ46LSl7RH?usp=sharing",
  "Operating Systems": "https://drive.google.com/drive/folders/1tRS3YgAZfDhBKYjF-UbcVpQezIQRZD3l?usp=sharing",
}

const sem_4 = {
  "Business Economics & Financial Analysis": "https://drive.google.com/drive/folders/19Wh2kGLc6YiMnOHIUJ3Z9atDFJZvmoKr?usp=sharing",
  "Design & Analysis of Algorihtms": "https://drive.google.com/drive/folders/1URRkH1a1hDHW8f6Zrl7tM-O2MHeLae3b?usp=sharing",
  "Database Management Systems": "https://drive.google.com/drive/folders/1fTRGvZmBkayzFd3q7FjVO5RK33pG1eDu?usp=sharing",
  "Operating Systems": "https://drive.google.com/drive/folders/16PVWMEYCQassfaPBjgsrupRkY5eb46P3?usp=sharing",
  "Theory Of Computation": "https://drive.google.com/drive/folders/1nvbnNLo3G2FIoqN9k_e3mtlvdKvFOq_C?usp=sharing",
  "Indian Tradition": "https://docs.google.com/document/d/1Lg0xneDyLRoM0wYeVDW0P2K7E6Ip90WL_EVEQqCr8ZI/edit?usp=sharing"
}

const sem_5 = {

}

const sem_6 = {

}

function sub_sem() {
  semester = document.querySelector('#semester').value;
  let html = "";
  for (let i = 0; i < Object.keys(eval(semester)).length; i++) {
      line = `<option value="${Object.keys(eval(semester))[i]}">${Object.keys(eval(semester))[i]}</option>`;
      html += line;
  };
  //console.log(html);
  document.getElementById('subjects').innerHTML = html;

}

function validate_mail(email) {
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email.match(regexEmail) && (email.includes("@iare.ac.in")) && (email.length == 21) && (email.includes("95"))) {
      return true;
  } else {
      return false;
  }
};

function submit() {
  name = document.querySelector('#name').value;
  email = document.querySelector('#email').value;
  semester = document.querySelector('#semester').value;

  sessionStorage.setItem('name', name);
  sessionStorage.setItem('email', email);
  sessionStorage.setItem('semester', semester);

  var selected = [];
  for (var option of document.getElementById('subjects').options) {
      if (option.selected) {
          selected.push(option.value);
      }
  };
  for (i = 0; i < 6; i++) {
      selected.push('');
  }


  if (selected[0] == '' || name == '' || email == "" || semester == "") {
      return Toastify({
          text: "Please enter all the details and then submit",
          duration: 3000,
          newWindow: true,
          close: true,
          gravity: "bottom", // `top` or `bottom`
          position: "center", // `left`, `center` or `right`
          offset: {
              x: 0, // horizontal axis - can be a number or a string indicating unity. eg: '2em'
              y: 75 // vertical axis - can be a number or a string indicating unity. eg: '2em'
          },
          style: {
              background: "#EA4335",
              color: "white"
          },
      }).showToast();
  };

  if (document.getElementById("agree").checked == false) {
      return Toastify({
          text: "Please confirm by marking the checkbox!",
          duration: 3000,
          newWindow: true,
          close: true,
          gravity: "bottom", // `top` or `bottom`
          position: "center", // `left`, `center` or `right`
          offset: {
              x: 0, // horizontal axis - can be a number or a string indicating unity. eg: '2em'
              y: 75 // vertical axis - can be a number or a string indicating unity. eg: '2em'
          },
          style: {
              background: "#EED202",
              color: "white"
          },
      }).showToast();
  };

  if (validate_mail(email) !== true) {
      return Toastify({
          text: "🚨 Incorrect Mail Address. Please use Domain Mail Address only",
          duration: 3000,
          newWindow: true,
          close: true,
          gravity: "bottom", // `top` or `bottom`
          position: "center", // `left`, `center` or `right`
          offset: {
              x: 0, // horizontal axis - can be a number or a string indicating unity. eg: '2em'
              y: 75 // vertical axis - can be a number or a string indicating unity. eg: '2em'
          },
          style: {
              background: "#EED202",
              color: "white"
          },
      }).showToast();
  };

  Toastify({
      text: "🎉 Your file will be downloaded now",
      duration: 3000,
      newWindow: true,
      close: true,
      gravity: "bottom", // `top` or `bottom`
      position: "center", // `left`, `center` or `right`
      offset: {
          x: 0, // horizontal axis - can be a number or a string indicating unity. eg: '2em'
          y: 75 // vertical axis - can be a number or a string indicating unity. eg: '2em'
      },
      style: {
          background: "#34A853",
          color: "white"
      },
  }).showToast()

  console.log(name);
  console.log(email);
  console.log(semester);
  console.log(selected);

  localStorage.setItem("name", name);

  localStorage.setItem("email", email);


  var total = '';
  for (i = 0; i < selected.length; i++) {
      if (selected[i] != '') {
          if (i == 0) {
              total = total + selected[i];
          } else {
              total = total + ', ' + selected[i];
          }

      }
  }

  make_pdf(name, subjects, selected, semester, sem_1, sem_2, sem_3, sem_4, sem_5, sem_6);
  const options = {
      method: 'POST',
      headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify({
          text: `<b>🗃️ New Request Served</b>\n\nName: ${name}\n\nEmail Address: ${email}\n\nSubjects Chosen: \n${total}`,
          parse_mode: 'html',
          chat_id: '-1001683760687'
      })
  };

  fetch('https://api.telegram.org/bot5488586515%3AAAGJRKKp7FWjOpEmgkHcGSNX2bdqMiOOvGI/sendMessage', options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
}