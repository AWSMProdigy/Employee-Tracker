INSERT INTO department (name)
VALUES ("Human Resources"),
       ("Management"),
       ("Engineering"),
       ("Finances");

INSERT INTO role (title, salary, department_id)
VALUES ("Clerk", 420.69, 1),
       ("Manager", 690.42, 2),
       ("Engineer", 460.92, 3),
       ("Treasurer", 240.96, 4);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES ("Kyle", "Sousa", 3, null),
       ("Hodaka", "Morishima", 3, null),
       ("Hina", "Amano", 1, null),
       