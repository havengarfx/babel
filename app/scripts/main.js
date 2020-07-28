

window.addEventListener("load", start);
let inputSearch = null;
let btnSearch = null;
let allUsers = [];
let nameSearch = [];
// let quantityMale=[];
let event2= null;

async function start() {
  console.log("start");
  inputSearch = document.querySelector("#input-search");
  btnSearch = document.querySelector("#btn-search");
  console.log(inputSearch);
  preventFormSubmit();
  activateInput();
enableButtonFormSearch();
  fetchAllUsers();
}

function preventFormSubmit() {
  function handleFormSubmit(event) {
    event.preventDefault();
  }
  let formSearchUsers = document.querySelector("form");
  formSearchUsers.addEventListener("submit", handleFormSubmit);
}

function activateInput() {
  function handleFormTyping(event) {

    event2 = event;


   handleFormTypingSubmit(event2);

  }


inputSearch.focus();
inputSearch.addEventListener("keyup", handleFormTyping);

}

    function handleFormTypingSubmit() {

    if (event2.key === "Enter" && inputSearch.value !== "") {
      console.log(inputSearch.value);
      // doFilter();
    }



}

    function clickFormButtonSubmit() {


      console.log(inputSearch.value + inputSearch.value);
      doFilter();

    }


function enableButtonFormSearch() {
inputSearch.addEventListener("keyup", enableButtonFormSearch);
  if (event.value !== "") {
    btnSearch.disabled = false;
  }
  if (inputSearch.value === "") {
    btnSearch.disabled = true;
  }
btnSearch.addEventListener("click",clickFormButtonSubmit);
}



async function fetchAllUsers() {
  const res = await fetch(
    "https://randomuser.me/api/?seed=javascript&results=100&nat=BR&noinfo"
  );
  const json = await res.json();
  allUsers = json.results.map((user) => {
    return {
      name: `${user.name.first} ${user.name.last}`,
      picture: user.picture.thumbnail,
      age: user.dob.age,
      gender: user.gender,
    };
  });
  console.log(allUsers);
}
function doFilter() {
  nameSearch = allUsers
    .filter((user) => {
      return user.name.toLowerCase().includes(inputSearch.value.toLowerCase());
    })
    .sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
  console.log(nameSearch);
  console.log(nameSearch.length);

  doFilterMale();
  doFilterFemale();
  doReduceSumAgesSearch();
  // mediaSearchAges();
}

function doFilterMale() {
  const quantityMale = nameSearch.filter((usergm) => {
    return usergm.gender === "male";
  });
  console.log(quantityMale.length);
}
function doFilterFemale() {
  const quantityFemale = nameSearch.filter((usergf) => {
    return usergf.gender === "female";
  });
  console.log(quantityFemale.length);
}

function doReduceSumAgesSearch() {
  const sumAgesSearch = nameSearch.reduce((acc, curr) => {
    return acc + curr.age;
  }, 0);
  console.log(sumAgesSearch);
  function mediaSearchAges() {
    return sumAgesSearch / nameSearch.length;
  }
  console.log(mediaSearchAges());
}
function ghy() {}

