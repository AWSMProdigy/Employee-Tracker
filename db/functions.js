const db = require('./db.js');

function getAllEmployees(){
    // Employee id, first name, last name, job title, department, salary, and manager
    db.query('SELECT employee.id, employee.first_name, employee.last_name, role.title, role.salary, department.name FROM employee INNER JOIN role ON employee.role_id=role.id INNER JOIN department on role.department_id=department.id', function (err, results) {
        console.table(results);
    });
}

function getAllDepartments(){
    //Formatted table showing department name and id
    db.query(`SELECT * FROM department`, function (err, results) {
        console.table(results);
    });
}

function getAllRoles(){
    // Job title, role id, the department the role belongs to, and the salary
    db.query('SELECT role.title, role.id, department.name, role.salary FROM role INNER JOIN department ON role.department_id=department.id', function (err, results) {
        console.table(results);
    });
}

function addDepartment(newDep){
    console.log(newDep);
    db.query(`INSERT INTO department (name) VALUES ('${newDep}')`, function (err, results) {
        if(err){
            throw err;
        }
    });
}

function addRole(roleName, salary, departmentID){
    db.query(`INSERT INTO role (title, salary, department_id) VALUES ('${roleName}', '${salary}', '${departmentID}')`, function (err, results) {
        if(err){
            throw err;
        }
    });
}

function addEmployee(fName, lName, roleID, managerID){
    db.query(`INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES ('${fName}', '${lName}', '${roleID}', '${managerID}')`, function (err, results) {
        if(err){
            throw err;
        }
    });
}

function updateRole(){
    
}

module.exports = {getAllEmployees, getAllDepartments, getAllRoles, addDepartment, addRole, addEmployee, updateRole}
