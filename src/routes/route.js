const express = require('express');
const router = express.Router();

const Persons = require("../models/personModel.js");


router.get('/getEmployees', async function (req, res) {
  let query = req.query;
  let data = await Persons.getPersons(query);
  return res.status(200).send({ data: data, status: true });
});


router.post('/addEmployee', async function (req, res) {
  let comingData = req.body;
  await Persons.createPerson(comingData)
  return res.status(201).send({ message: "employee added successfully !", status: true })
});


router.get('/getDepartmentEmployees', async function (req, res) {
  let query = req.query;
  if (Object.keys(query).length == 0) return res.send({ message: "please enter dep_id !", status: false });
  let data = await Persons.getSingleDepartmentEmployees(query);
  return res.status(200).send({ data: data, status: true });
});


module.exports = router;