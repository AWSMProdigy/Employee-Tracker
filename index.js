const inquirer = require('inquirer');
const { getAllEmployees, getAllDepartments, getAllRoles, addDepartment, addRole, addEmployee, updateRole } = require('./db/functions');
const logo = require('asciiart-logo');
const db = require('./db/db.js');


function addNewDepartment(){
    inquirer.prompt([
        {
            type:"input",
            name: "newDep",
            message: "What do you want to name the new department?"
        }
    ]).then((response) => {
        console.log(response.newDep);
        addDepartment(response.newDep);
        mainMenu();
    })
}

function addNewRole(){
    inquirer.prompt([
        {
            type:"input",
            name: "newRole",
            message: "What do you want to name the new role?"
        },
        {
            type:"input",
            name:"newSal",
            message: "What is the salary of the new role?"
        }
    ]).then((response) => {
        const roleName = [response.fName, response.lName];
        db.query("SELECT * from department", (err, res) => {
            const depChoices = res.map(({id, name})  => ({
                name: name,
                value: id
            }));
            inquirer.prompt([
                {
                    type: "list",
                    name: "depChoice",
                    message: "Which department does the role belong to?",
                    choices: depChoices
                }
            ]).then((response) => {
                const depChoice = response.depChoice;
                roleName.push(depChoice);
                addRole(roleName[0], roleName[1], roleName[2]);
                mainMenu();
            })
        })
    })
}

function addNewEmployee(){
    inquirer.prompt([
        {
            type:"input",
            name: "fName",
            message: "What is the first name of the new employee?"
        },
        {
            type:"input",
            name: "lName",
            message: "What is the last name of the new employee?"
        },
        ]).then((response) => {
            const empName = [response.fName, response.lName];
            db.query("SELECT role.id, role.title FROM role", (err, res) => {
                const roleChoices = res.map(({id, title}) => ({name: title, value: id}));
                inquirer.prompt([
                    {
                        type: "list",
                        name: "empRole",
                        message: "What is the employee's role?",
                        choices: roleChoices
                    }
                ]).then(roleDecision => {
                    const empRole = roleDecision.empRole;
                    empName.push(empRole);
                    db.query("SELECT * FROM employee", (err, res) => {
                        const managerChoices = res.map(({id, first_name, last_name}) => ({
                            name:  first_name + " " + last_name,
                            value: id
                        }));
                        inquirer.prompt([
                            {
                                type: "list",
                                name: "empMan",
                                message: "Who is the employee's manager?",
                                choices: managerChoices
                            }
                        ]).then(manChoice => {
                            const empMan = manChoice.empMan;
                            empName.push(empMan);
                            addEmployee(empName[0], empName[1], empName[2], empName[3]);
                            mainMenu();
                        })
                    })
                })
            })
        })
}
function mainMenu(){
    inquirer.prompt([
        {
            type: "list",
            name: "choice",
            message: "What would you like to do?",
            choices: ["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee", "Update an employee role"],
        },
        ]).then((response) =>{
        console.log("\n");
        switch(response.choice){
            case "View all departments":
                getAllDepartments();
                mainMenu();
                break;
            case "View all roles":
                getAllRoles();
                mainMenu();
                break;
            case "View all employees":
                getAllEmployees();
                mainMenu();
                break;
            case "Add a department":
                addNewDepartment();
                break;
            case "Add a role":
                addNewRole();
                break;
            case "Add an employee":
                addNewEmployee();
                break;
            case "Update an employee role":
                updateRole();
                break;
        }
    })
}
const logoText = logo({ name: "Employee Tracker" }).render();
console.log(logoText);
mainMenu();


