// creating BMi calculator 
import { constants } from "buffer"
import  inquirer from "inquirer"
const questions = [{
    type: "input",
    name: "weight",
    message: `Weight(kg):,`
},
{
    type: "input",
    name: "height",
    message: `hight(m):,`
}
];
const CalculateBMI =(weight: number, height: number):number => weight / (height * height)
const main = async () =>{
    const {weight,height} = await inquirer.prompt(questions)
    console.log(` BMI: ${CalculateBMI( weight, height).toFixed(2)}`);
    
}
main();