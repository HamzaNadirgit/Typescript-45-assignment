"use strict";
//assignment no 13
let transportationMode = ["car", "motorcycle", "bicycle", "bus"];
for (let i = 0; i < transportationMode.length; i++) {
    console.log(`i would to own a ${transportationMode[i]}`);
}
transportationMode.forEach(mode => {
    console.log(`i would like to own ${mode}`);
});
