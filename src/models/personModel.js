const { sql } = require("../db.js");



const getPersons = async function (filters) {
    let query, data;
    if (filters.dep_id) {
        query = `SELECT * FROM employee where dep_id=${filters.dep_id}`;
        data = await sql(query);
    } else {
        query = `SELECT * FROM employee`;
        data = await sql(query);
    }
    return data;
}



const createPerson = async function (data1) {
    let { name, dep_id } = data1;
    let query = `INSERT INTO employee (name, dep_id) VALUES ('${name}', '${dep_id}')`;
    let q = `update department set totalEmployee = totalEmployee + 1 where id=${dep_id};`
    await sql(query);
    await sql(q);
    return
}


const getSingleDepartmentEmployees = async function (filters) {
    let query = `select * from employee 
        right join department 
        on employee.dep_id = department.id 
        where dep_id=${filters.dep_id}`;
    let data = await sql(query);
    return data;
}


module.exports = { getPersons, createPerson, getSingleDepartmentEmployees }