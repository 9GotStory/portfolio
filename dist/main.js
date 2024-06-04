// fetch github
const APIURL = "https://api.github.com/users/9GotStory";
const getProfile = async () => {
  const response = await fetch(APIURL);
  const data = await response.json();
  return data;
};

getProfile().then((data) => {
  const { name, avatar_url, html_url, bio } = data;
  const profileAvatar = document.querySelector("#profileAvatar");
  const profileName = document.querySelector("#profileName");
  const githubUrl = document.querySelector("#githubUrl");
  const bioProfile = document.querySelector("#bioProfile");

  profileAvatar.setAttribute("src", avatar_url);
  githubUrl.setAttribute("href", html_url);
  profileName.textContent = name;
  bioProfile.textContent = bio;

});

const toggleMode = document.querySelector("#toggleMode");
const textMode = document.querySelector("#textMode");

toggleMode.addEventListener("click", () => {
  if (document.body.className === "light") {
    document.body.classList.remove("light");
    document.body.classList.add("dark");
    textMode.textContent = "Light Mode";
  } else if (document.body.className === "dark") {
    document.body.classList.remove("dark");
    document.body.classList.add("light");
    textMode.textContent = "Dark Mode";
  }
});

function calculateAge() {
  const currentDate = new Date();
  const birthDate = new Date("1996-05-06");
  currentDate.setHours(currentDate.getHours() + 7);

  let ageInYears = currentDate.getFullYear() - birthDate.getFullYear();
  let ageInMonths = currentDate.getMonth() - birthDate.getMonth();
  let ageInDays = currentDate.getDate() - birthDate.getDate();

  if (ageInDays < 0) {
    ageInMonths--;
    const previousMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      0
    ).getDate();
    ageInDays += previousMonth;
  }

  if (ageInMonths < 0) {
    ageInYears--;
    ageInMonths += 12;
  }

  const ageElement = document.querySelector("#age");
  ageElement.textContent =
    ageInYears + " Year " + ageInMonths + " Month " + ageInDays + " Day";
}
document.addEventListener("DOMContentLoaded", () => {
  calculateAge();
});

const btnBackToTop = document.getElementById("btnBackToTop");
window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    btnBackToTop.classList.remove("hidden");
  } else {
    btnBackToTop.classList.add("hidden");
  }
});
btnBackToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0 });
});

// // modal
// const modalProfile = document.getElementById("modalProfile");

// function openModal() {
//   modalProfile.classList.remove("hidden");
//   modalProfile.classList.add("block");
//   document.body.classList.add("overflow-hidden");
// }

// function closeModal() {
//   modalProfile.classList.remove("block");
//   modalProfile.classList.add("hidden");
//   document.body.classList.remove("overflow-hidden");
// }

// window.addEventListener("keydown", (event) => {
//   if (event.key === "Escape" || modalProfile.style.display === "block") {
//     closeModal();
//   }
// });
