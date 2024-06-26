import { expect } from "chai";
import { getAverageSleepHours, getAverageSleepQuality, specificSleepHoursByDay, specificSleepQualityByDay } from "../src/sleepDataFunctions.js";
import { usersArray, sleepData } from "../src/data/mockData.js";

describe("Sleep Data Functions", () => {
  let user;
  let date;

  beforeEach(() => {
    // Set up common variables for each test
    user = usersArray[0];
    date = "2023/03/24";
  });

  describe("getAverageSleepHours", () => {
    it("should return the average hours slept per day for a user", () => {
      const result = getAverageSleepHours(user, sleepData);
      expect(result).to.equal((9.6 + 7.8 + 8.2) / 3);
    });

    it("should return NaN if there is no sleep data for the user", () => {
      const nonExistentUser = { id: 4, name: "Literally Who?", dailyStepGoal: 5000 };
      const result = getAverageSleepHours(nonExistentUser, sleepData);
      expect(result).to.be.NaN;
    });

    it("should return NaN if the sleep data array is empty", () => {
      const result = getAverageSleepHours(user, []);
      expect(result).to.be.NaN;
    });

    it("should return NaN if the user exists but has no sleep data entries", () => {
      const emptySleepData = sleepData.filter(entry => entry.userID !== user.id);
      const result = getAverageSleepHours(user, emptySleepData);
      expect(result).to.be.NaN;
    });
  });

  describe("getAverageSleepQuality", () => {
    it("should return the average sleep quality per day for a user", () => {
      const result = getAverageSleepQuality(user, sleepData);
      expect(result).to.equal((4.3 + 3.8 + 4.1) / 3);
    });

    it("should return NaN if there is no sleep data for the user", () => {
      const nonExistentUser = { id: 4, name: "Non Existent User", dailyStepGoal: 5000 };
      const result = getAverageSleepQuality(nonExistentUser, sleepData);
      expect(result).to.be.NaN;
    });
  });

  describe("specificSleepHoursByDay", () => {
    it("should return the hours slept on a specific date for a user", () => {
      const result = specificSleepHoursByDay(date, sleepData, user);
      expect(result).to.equal(9.6);
    });

    it("should return 0 if there is no sleep data for the user on the specific date", () => {
      const nonExistentDate = "2023/03/23";
      const result = specificSleepHoursByDay(nonExistentDate, sleepData, user);
      expect(result).to.equal(0);
    });
  });

  describe("specificSleepQualityByDay", () => {
    it("should return the sleep quality on a specific date for a user", () => {
      const result = specificSleepQualityByDay(date, sleepData, user);
      expect(result).to.equal(4.3);
    });

    it("should return 0 if there is no sleep quality data for the user on the specific date", () => {
      const nonExistentDate = "2023/03/23";
      const result = specificSleepQualityByDay(nonExistentDate, sleepData, user);
      expect(result).to.equal(0);
    });
  });
});
