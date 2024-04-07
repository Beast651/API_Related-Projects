let api = "http://universities.hipolabs.com/search?name=";
let api2 = "http://universities.hipolabs.com/search?name=india";

let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");

btn1.addEventListener("click", async () => {
  let input = document.querySelector("input");
  let country = input.value;
  input.value = "";

  let colArr = await getCollegeData(country);
  showCountry(colArr);
});

function showCountry(colArr) {
  let list = document.querySelector("#list");
  list.innerText = "";
  for (col of colArr) {
    let li = document.createElement("li");
    li.innerText = col.name;
    list.appendChild(li);
  }
}

btn2.addEventListener("click", async () => {
  let input = document.querySelector("input");
  let state = input.value;

  let res = await getStateCollege();
  show(res, state);
});

function show(collegeArray, state) {
  let list = document.querySelector("#list");
  list.innerHTML = "";
  for (college of collegeArray) {
    let li = document.createElement("li");
    if (college["state-province"] === state) {
      li.innerText = college.name;
    } else {
      continue;
    }
    list.appendChild(li);
  }
}

async function getCollegeData(country) {
  try {
    let res = await axios.get(api + country);
    return res.data;
  } catch (e) {
    // alert("Check the Spelling");
    return [];
  }
}

async function getStateCollege() {
  try {
    let res = await axios.get(api2);
    return res.data;
  } catch (e) {
    // alert("Check the Spelling");
    return [];
  }
}
