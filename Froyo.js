// Prompt user for froyo flavors.
const flavors = prompt(
  "Please enter a list of froyo flavors separated by commas."
);

// convert user input into an array of individual flavors
const flavorsArray = flavors.split(",");
// console.log(flavorsArray); was here for testing

// create an object to track flavors that have been observed
const froyo = {};

// create a function that loops over array and
// determines if flavor exists and increase count
function trackfroyoflavors() {
  for (let i = 0; i < flavorsArray.length; i++) {
    // does specified key exist in froyo object?
    // trim and convert to lowercase to insure duplicate
    // entries are not counted as separate keys.

    // if specific key exists, increase key value by 1
    if (froyo[flavorsArray[i].trim().toLowerCase()]) {
      froyo[flavorsArray[i].trim().toLowerCase()] += 1;
    } else {
      // If the key doesn't exist, create it with value 1
      froyo[flavorsArray[i].trim().toLowerCase()] = 1;
    }
  }
  // return the completed object
  return froyo;
}
// call the function to track the flavors
console.table(trackfroyoflavors());

