import {
  userSteps,
  setLoggedInUser,
  getLoggedInUser,
  findFriends,
} from "./userDataFunctions.js";

import { specificOuncesByDay } from "./hydrationDataFunctions.js";

var userCard = document.querySelector(".card1");
var welcomeUser = document.querySelector(".card-banner");
var widgetBox = document.querySelector(".card2");

var isAllUserInfoDisplayed = false;

export default function displayUserInfo(user, userData) {
  welcomeUser.innerText = `Welcome, ${user.name.split(" ")[0]}`;
  checkIfDisplayed(user, userData);
}

function checkIfDisplayed(user, userData) {
  if (isAllUserInfoDisplayed) {
    const friends = findFriends(user, userData);
    const friendsNames = friends.map((friend) => friend.name).join(", ");

    userCard.innerHTML = `
      <section class='allInfoCard'>
      <h3>User id: #${user.id}</h3> 
      <h3>Full name: ${user.name}</h3>
      <h3>Email: ${user.email}</h3>
      <h3>Address: ${user.address}</h3>
      <h3>Friends: ${friendsNames}</h3>
      <h3>Daily Step Goal: ${user.dailyStepGoal}</h3>
      <h3>Stride Length: ${user.strideLength}</h3>
      </section>
      <button class='moreInfoBttn'>Hide</button>
    `;
    userCard.classList.add("allInfoCard");
  } else {
    userCard.classList.remove("allInfoCard");
    userCard.innerHTML = `
      <section class='user-card'> 
        <h3>${user.name.split(" ")[0]}'s daily step goal is ${user.dailyStepGoal} steps</h3>
        <h3>The average user step goal is ${userSteps}</h3>
      </section>
      <button class='moreInfoBttn'>More User Info</button>
    `;
  }
  var infoBttn = document.querySelector(".moreInfoBttn");
  infoBttn.addEventListener("click", () => toggleUserInfo(user, userData));
}

function toggleUserInfo(user, userData) {
  isAllUserInfoDisplayed = !isAllUserInfoDisplayed;
  checkIfDisplayed(user, userData);
}

export function displayHydroData(date, weekOfHydro, usersOunces, ouncesByDate) {
  widgetBox.innerHTML = `
    <div class='widget widget1'>
      <h3>You consumed ${ouncesByDate}oz of water today.</h3>
      <h3>Avg OZ of water consumed: ${usersOunces}</h3>
      <h3>OZ of water consumed over 7 days ${weekOfHydro.map((day) => day.numOunces).join(", ")}</h3>
    </div>`;
}

export function displaySleepData(
  avgSleepHours,
  avgSleepQuality,
  sleepHoursByDay,
  sleepQualityByDay,
  hoursSleptThisWeek,
  sleepQualityByWeek
) {
  widgetBox.innerHTML += `
  <div class='widget widget2'>
  <h3>Avg sleep per week: ${Math.round(avgSleepHours)} hours </h3>
  <h3>Avg sleep quality: ${Math.round(avgSleepQuality)} out of 5 </h3>
  <h3>You've slept: ${Math.round(sleepHoursByDay)} hours last night</h3>
  <h3>Last night's sleep quality: ${sleepQualityByDay} out of 5 </h3>
  <h3>Hours slept this week: ${hoursSleptThisWeek.map((day) => Math.round(day.hoursSlept)).join(", ")} </h3>
  <h3>Sleep quality over 7 days: ${sleepQualityByWeek.map((day) => day.sleepQuality)}</h3>

</div>`;
}
