# billEasy_assignment

Create an API using Node.js, you are free to use any framework for this of your choice (preferred Strongloop)

Linking with PostGres database creating basic tables which should have employee data.

The API should return data of the employee querying joins from different tables and show a result set to a specific employee ID.

Design a Database table structure in POSTGRESQL from the above.

Create a Trigger on the Employee table.

Maintain a count of employees in each department(REFERENCE to department table) - trigger should increase the count as and when the employee is inserted.

Submit insert scripts also.

Create a function in DB to return JSON of all employee details in a department based on the time they joined the company (time range filter along with department filter)

Revoke this database function from API in NodeJs accepting parameters also in the API itself.

After all of the database and Node.js code is finished, deploy the whole code on Heroku/AWS using Heroku/AWS CLI and share the API URL and the codebase via Github/Bitbucket.