const db = require('./db.js');

function getAllEmployees(){
    db.query('SELECT * FROM employee', function (err, results) {
        console.table(results);
    });
}

function getAllDepartments(){
    //Formatted table showing department name and id
    db.query('SELECT * FROM department', function (err, results) {
        console.table(results);
    });
}

function getAllRoles(){
    // Job title, role id, the department the role belongs to, and the salary
    db.query('SELECT * FROM department', function (err, results) {
        console.table(results);
    });
}

function addDepartment(newDep){
    db.query(`INSERT INTO department (name) VALUES (${newDep})`);
}

function addRole(roleName, salary, departmentID){
    db.query(`INSERT INTO role (title, salary, department_id) VALUES (${roleName}, ${salary}, ${departmentID})`);
}

function addEmployee(fName, lName, roleID, managerID){
    db.query(`INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES (${fName}, ${lName}, ${roleID}, ${managerID}),`);
}

function updateRole(){
    
}

module.exports = {getAllEmployees, getAllDepartments, getAllRoles, addDepartment, addRole, addEmployee, updateRole}
