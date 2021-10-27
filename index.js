const inquirer = require('inquirer');
const { getAllEmployees, getAllDepartments, getAllRoles, addDepartment, addRole, addEmployee, updateRole } = require('./db/functions');


function addNewDepartment(){
    inquirer.prompt([
        {
            type:"input",
            name: "newDep",
            message: "What do you want to name the new apartment?"
        }
    ]).then((response) => {
        await addDepartment(response.newDep);
    })
}

function mainMenu(){
    inquirer.prompt([
        {
            type: "list",
            name: "choice",
            message: "What license did you need",
            choices: ["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee", "Update an employee role"],
        },
        ]).then((response) =>{
        switch(response.choice){
            case "View all departments":
                getAllDepartments();
                break;
            case "View all roles":
                getAllRoles();
                break;
            case "View all employees":
                getAllRoles();
                break;
            case "Add a department":
                addDepartment();
                break;
            case "Add a role":
                addRole();
                break;
            case "Add an employee":
                addEmployee();
                break;
            case "Update an employee role":
                updateRole();
                break;
        }
    })
}

