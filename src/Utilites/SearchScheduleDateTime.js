import data from "./data.json";
export default function SearchSchduleDateTime(date) {
  const SearchFunction = (item_date, arr) => {
    let searchResults = [];
    arr.forEach(function (item) {
      if (item.item_date.toLowerCase().includes(item_date.toLowerCase())) {
        searchResults.push(item);
      }
    });
    return searchResults;
  };

  const instances = SearchFunction(date, data);
  var obj = {};

  instances.forEach((instance) => {
    const temp_date = instance.schedule_time.split(" ")[0].trim();
    if (temp_date in obj) {
      obj[temp_date][0].push(instance);
      obj[temp_date][1] += 1;
    } else {
      obj[temp_date] = [[instance], 1];
    }
  });
  console.log(date);
  var options = [[], []];
  for (let [key, value] of Object.entries(obj)) {
    options[0].push(key);
    options[1].push(value);
  }
  return [options, instances];
}
