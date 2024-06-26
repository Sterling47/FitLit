import Chart from 'chart.js/auto';
import {
  userSteps,
  setLoggedInUser,
  getLoggedInUser,
  findFriends
} from "./userDataFunctions.js";
import { compareSteps } from "./scripts.js";
import { specificOuncesByDay } from "./hydrationDataFunctions.js";

// Query selectors
var userCard = document.querySelector(".card1");
var welcomeUser = document.querySelector(".card-banner");
var hydrationWidget = document.getElementById('hydration-widget');
var sleepWidget = document.getElementById('sleep-widget');
var activityWidget = document.getElementById('activity-widget');
var isAllUserInfoDisplayed = false;

// Functions
export default function displayUserInfo(user, userData) {
  welcomeUser.innerHTML = `<h3 class='intro'> Welcome,<span> ${user.name.split(" ")[0]}!</span>`;
  checkIfDisplayed(user, userData);
}

function checkIfDisplayed(user, userData) {
  userCard.innerHTML = "";
  if (isAllUserInfoDisplayed) {
    const friends = findFriends(user, userData);
    const friendsNames = friends.map((friend) => friend.name).join(", ");
    userCard.innerHTML = `
      <section class='user-card'>
      <h2>User Profile</h2>
      <br>
      <div>
        <h3><span>User id:</span> #${user.id}</h3> 
        <h3><span>Full name:</span> ${user.name}</h3>
        <h3><span>Email:</span> ${user.email}</h3>
        <h3><span>Address:</span> ${user.address}</h3>
        <h3><span>Friends:</span> ${friendsNames}</h3>
        <h3><span>Daily Step Goal:</span> ${user.dailyStepGoal}</h3>
        <h3><span>Stride Length:</span> ${user.strideLength}</h3>
        <button class='moreInfoBttn'>Hide</button>
      </div>
      </section>
    `;
  } else {
    userCard.innerHTML = `
      <section class='user-card'> 
        <h2>User Profile</h2>
        <br>
        <div>
          <h3><span>${user.name.split(" ")[0]}'s</span> daily step goal is <span>${user.dailyStepGoal} </span>steps</h3>
          <br>
          <h3>The <span>average</span> step goal is <span>${userSteps}</span></h3>
        </div>
        <button class='moreInfoBttn'>More User Info</button>
      </section>
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
  hydrationWidget.innerHTML = `
    <div class='widget widget1'>
    <h2>Hydro Stats</h2>  
    <div>
      <h3>You drank <span>${ouncesByDate}oz</span> of water today.</h3>
      <h3><span>Average</span> ounces of water consumed: <span>${usersOunces} oz</span></h3>
      <canvas class='graph' id="hydroChart"></canvas>
    </div>
    </div>`;

  const ctx = document.getElementById('hydroChart').getContext('2d');
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: weekOfHydro.map(day => day.date),
      datasets: [{
        label: 'Water Consumed (oz)',
        data: weekOfHydro.map(day => day.numOunces),
        borderColor: 'blue',
        fill: false
      }]          
    },
    options: {
      responsive: true,
      scales: {
        x: { 
          title: { display: true, text: 'Date', color: 'white' },
          ticks: { color: 'white' }
        },
        y: { 
          title: { display: true, text: 'Ounces', color: 'white' },
          ticks: { color: 'white' }
        }
      }
    }
  });
}

export function displaySleepData(avgSleepHours, avgSleepQuality, sleepHoursByDay, sleepQualityByDay, hoursSleptThisWeek, sleepQualityByWeek) {
  sleepWidget.innerHTML = `
  <div class='widget widget2'>
    <h2>Sleep Stats</h2>
    <div>
      <h3>You've slept <span>${Math.round(sleepHoursByDay)}</span> hours last night</h3>
      <h3>Last night's <span>sleep quality</span> was <span>${sleepQualityByDay}</span>/5</h3>

    </div>
    <canvas id='sleepChart'></canvas>
    <canvas id='sleepQualityChart'></canvas>
  </div>`;

  // Hours Slept Chart
  const ctx = document.getElementById('sleepChart').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: hoursSleptThisWeek.map(day => day.date),
      datasets: [{
        label: 'Hours Slept',
        data: hoursSleptThisWeek.map(day => day.hoursSlept),
        backgroundColor: 'green',
        fill: false
      }]
    },
    options: {
      responsive: true,
      scales: {
        x: { 
          title: { display: true, text: 'Date', color: 'white' },
          ticks: { color: 'white' }
        },
        y: { 
          title: { display: true, text: 'Hours', color: 'white' },
          ticks: { color: 'white' }
        }
      }
    }
  });

  // Sleep Quality Chart
  const ctxQuality = document.getElementById('sleepQualityChart').getContext('2d');
  new Chart(ctxQuality, {
    type: 'bar',
    data: {
      labels: sleepQualityByWeek.map(day => day.date),
      datasets: [{
        label: 'Sleep Quality',
        data: sleepQualityByWeek.map(day => day.sleepQuality),
        backgroundColor: 'purple',
        fill: false
      }]
    },
    options: {
      responsive: true,
      scales: {
        x: { 
          title: { display: true, text: 'Date', color: 'white' },
          ticks: { color: 'white' }
        },
        y: { 
          title: { display: true, text: 'Quality', color: 'white' },
          ticks: { color: 'white' }
        }
      }
    }
  });
}

export function displayActivityData(activityData, loggedInUser) {
  const activityWidget = document.getElementById('activity-widget');

  const totalSteps = activityData.reduce((total, activity) => total + activity.numSteps, 0);
  const startDate = activityData[activityData.length - 1].date;
  const endDate = activityData[0].date;

  const friendsSteps = compareSteps(loggedInUser, loggedInUser.friends);
  const rankedSteps = friendsSteps.sort((a, b) => b.steps - a.steps);

  const emotions = ["🏆", "🥈", "🥉", "😊"]; 

  const stepList = rankedSteps.map((friend, index) => `
      <div class="step-item">
        <span class="rank">${index + 1} ${emotions[index] || "😊"}</span>
        <span class="name">${friend.name}</span>
        <span class="steps">${friend.steps} steps</span>
      </div>`
  ).join('');

  activityWidget.innerHTML = `
    <div class="widget">
      <h2>Step Challenge</h2>
      <p>Your Total Steps: ${totalSteps}</p>
      <p>Date Range: ${startDate} - ${endDate}</p>
      <div class="step-list">${stepList}</div>
    </div>
  `;
}
