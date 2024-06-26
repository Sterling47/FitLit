let newUserData = [];
let userSteps = 0;
let randomUser = {};
let loggedInUser = {};

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
function getUserDataById(userID, userDataArray) {
  return userDataArray.find((user) => user.id === userID);
}
function avgSteps(userDataArray) {
  return userDataArray.reduce((acc, user) => {
    return acc + user.dailyStepGoal / userDataArray.length;
  }, 0);
}
function setLoggedInUser(userID) {
  loggedInUser = getUserDataById(userID, newUserData);
}
function getLoggedInUser() {
  return loggedInUser;
}
function setUserData(data) {
  newUserData = data;
  userSteps = avgSteps(data);
}
function findFriends(user, userDataArray) {
  return user.friends.map((friendID) => {
    return userDataArray.find((userP) => userP.id === friendID);
  });
}

export {
  getRandomIndex,
  getUserDataById,
  randomUser,
  userSteps,
  avgSteps,
  setLoggedInUser,
  getLoggedInUser,
  loggedInUser,
  setUserData,
  findFriends,
};
