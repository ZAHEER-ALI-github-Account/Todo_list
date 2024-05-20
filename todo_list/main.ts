#! /usr/bin/env node

import inquirer from "inquirer"
import { log } from "node:console";
import { todo } from "node:test";
let todo_list: string[] = [];
let while_condition: boolean = true;
while(while_condition === true){
    //-----------------------options-------------------------------------------
    let option = await inquirer.prompt([{
        type: "list",
        name: "user_option",
        message: "\n select an option",
        choices: ["Add","Remove"]
    }]) 
    //-----------------------Add-------------------------------------------
    if(option.user_option === "Add"){
        let ans = await inquirer.prompt([{
            type: "input",
            name: "user_ans",
            message: "\n write something to add in the task list: "
        }])
        if (ans.user_ans !== ""){
            todo_list.push(ans.user_ans);
            console.log(todo_list);
        }else{
            console.log("\n Please write something to add in the todo list: ");
        }
    }
    //-----------------------------Remove------------------------------------
    else if(option.user_option === "Remove"){
        let remove_choice = await inquirer.prompt([{
            type: "list",
            name: "remove_items",
            message: "\n select item to remove",
            choices: todo_list
        }]);
        let index_to_remove = todo_list.indexOf(remove_choice.remove_items);
        if(index_to_remove >= 0){
            todo_list.splice(index_to_remove, 1);
            console.log("You removed: ",remove_choice.remove_items);
            console.log(todo_list);
        }
    }
    //-----------------------------------confirm------------------------------
    let userAns = await inquirer.prompt([{
        type: "confirm",
        name: "selection",
        message: "\n Do you want to continue?",
        default: true
    }])
    if(userAns.selection === false){
        while_condition = false;
    }
}
console.log("\n Thank you for using todo list!");