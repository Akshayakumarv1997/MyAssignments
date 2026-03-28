const browserName = "Chrome";

function getBrowserVersion() {
    if (browserName === "Chrome") {
        let browserVersion = "Version 120";
        console.log("Inside block:", browserVersion);
    }

    console.log("Outside block:", browserVersion);
}

getBrowserVersion();