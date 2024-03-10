// Code your solution here
// function to take drivers names
// to be case sensitive

// Chat Ai

// function findMatching(drivers, query) {
//     // Convert the query string to lowercase for case-insensitive comparison
//     const lowercaseQuery = query.toLowerCase();

//     // Use the filter() method to find matching drivers
//     const matchingDrivers = drivers.filter(driver =>
//         driver.toLowerCase().includes(lowercaseQuery)
//     );

//     return matchingDrivers;
// }


// Academy xi

function findMatching(source, sought) {
    return source.filter(
        (possibleMatch) => possibleMatch.toLowerCase() === sought.toLowerCase()
    );

}

// fuzzyMatch - This function takes an array of drivers' names and a string as arguments for querying the array, and returns all drivers whose names begin with the provided letters.

// My effort:

function fuzzyMatch(drivers, query) {
    return drivers.filter(
        (possibleMatch) => possibleMatch.charAt(0) === query
    );
}

// offcial solution


function fuzzyMatch(source, testString) {
    return source.filter(
        (possibleMatch) =>
            possibleMatch.toLowerCase().indexOf(testString.toLowerCase()) === 0
    );
}

ChatGpt

function fuzzyMatch(drivers, query) {
    // Convert the query string to lowercase for case-insensitive comparison
    const lowercaseQuery = query.toLowerCase();

    // Use the filter() method to find drivers whose names begin with the provided letters
    const matchingDrivers = drivers.filter(driver =>
        driver.toLowerCase().startsWith(lowercaseQuery)
    );

    return matchingDrivers;
}



// matchName - This function takes an array of driver objects and a string as arguments. Each driver object has two properties: name and hometown. The function should return each element whose name property matches the provided string argument.

// my attempt:

function matchName(drivers, query) {
    const matchingNames = drivers.filter(drivers => drivers.name[hometown] === query
    );
    return matchingNames;

}

// xi


function matchName(source, soughtName) {
    return source.filter((record) => record.name === soughtName);
}
