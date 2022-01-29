import { instructors } from "../data/database.js";

// const basicForLoop = () => {
//     for (let i = 0; i < instructors.length; i++) {
//         console.log(`The current value of i is: ${i}`);
//         console.log(`Instructor name: ${instructors[i].name}`);
//         console.log(`Instructor verve: ${instructors[i].verve}`);
//         console.log(`Instructor moxie: ${instructors[i].moxie}`);
//         if (instructors[i].jeNeSaisQuoi) {
//             console.log(`${instructors[i].name} has that je ne sais quoi that makes a great instructor`)
//         }
//         console.log("") // This just logs a blank line, so the output is a little more readable.
//     }
// }

const forEachExample = () => {
    instructors.forEach(
        (instructor) => {
            console.log(`Instructor name: ${instructor.name}`);
            console.log(`Instructor verve: ${instructor.verve}`);
            console.log(`Instructor moxie: ${instructor.moxie}`);
            if (instructor.jeNeSaisQuoi) {
                console.log(`${instructor.name} has that je ne sais quoi that makes a great instructor`)
            }
            console.log("") // This just logs a blank line, so the output is a little more readable.
        }
    )
}

// basicForLoop();
forEachExample();
