// Global variable
const browserName = "Chrome";

function getBrowserVersion() {
    if (browserName == "Chrome") {
        var browserVersion = "Version 120";
        // Accessing the browserVersion inside the block
        console.log("Inside block:", browserVersion);
    }

    // Accessing the browserVersion outside the block
    console.log("Outside block:", browserVersion);
}

// Call function
getBrowserVersion();

