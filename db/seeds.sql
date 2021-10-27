INSERT INTO department (name)
VALUES ("Human Resources"),
       ("Management"),
       ("Engineering"),
       ("Finances");

INSERT INTO role (title, salary, department_id)
VALUES ("Human Resource", 420.69, 1),
       ("Management", 690.42, 1),
       ("Engineering", 460.92, 1),
       ("Finances", 240.96, 1);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES ("Kyle", "Sousa", 3, null),
       ("Hodaka", "Morishima", 3, null),
       ("Hina", "Amano", 1, null),
       