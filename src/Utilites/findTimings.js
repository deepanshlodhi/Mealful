export default function findTimings(date, scheduleDateTime) {
  const newSearchFunction = (searchTerm, arr) => {
    let searchResults = [];
    arr.forEach(function (item) {
      if (item.schedule_time.toLowerCase().includes(searchTerm.toLowerCase())) {
        searchResults.push(item);
      }
    });
    return searchResults;
  };

  const time_instances = newSearchFunction(date, scheduleDateTime);
  console.log("my instances", time_instances);

  var timings = {
    "0am to 3am": [[], 0],
    "3am to 6am": [[], 0],
    "6am to 9am": [[], 0],
    "9am to 12pm": [[], 0],
    "12pm to 3pm": [[], 0],
    "3pm to 6pm": [[], 0],
    "6pm to 9pm": [[], 0],
    "9pm to 12am": [[], 0],
  };

  time_instances.forEach((instance) => {
    const temp_time = instance.schedule_time.split(" ")[1].substring(0, 2);

    if (temp_time >= 0 && temp_time <= 3) {
      timings["0am to 3am"][0].push(instance);
      timings["0am to 3am"][1] += 1;
    } else if (temp_time > 3 && temp_time <= 6) {
      timings["3am to 6am"][0].push(instance);
      timings["3am to 6am"][1] += 1;
    } else if (temp_time > 6 && temp_time <= 9) {
      timings["6am to 9am"][0].push(instance);
      timings["6am to 9am"][1] += 1;
    } else if (temp_time > 9 && temp_time <= 12) {
      timings["9am to 12pm"][0].push(instance);
      timings["9am to 12pm"][1] += 1;
    } else if (temp_time > 12 && temp_time <= 15) {
      timings["12pm to 3pm"][0].push(instance);
      timings["12pm to 3pm"][1] += 1;
    } else if (temp_time > 15 && temp_time <= 18) {
      timings["3pm to 6pm"][0].push(instance);
      timings["3pm to 6pm"][1] += 1;
    } else if (temp_time > 18 && temp_time <= 21) {
      timings["6pm to 9pm"][0].push(instance);
      timings["6pm to 9pm"][1] += 1;
    } else if (temp_time > 21 && temp_time < 24) {
      timings["9pm to 12am"][0].push(instance);
      timings["9pm to 12am"][1] += 1;
    }
    // console.log("===>", temp_time);
  });

  console.log("mytimings=>", timings);
  return timings;
}
