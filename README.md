Project updated to fit Task2_NodeJS-ExpressJS requirements.

Changes made:
- Converted to MVC: added controllers, routes.
- Added authentication (register/login) with bcrypt and express-session.
- Added studentController with full CRUD and search.
- Added index on student name for MongoDB performance.
- Views: added editStudent.ejs, studentDetails.ejs, login.ejs, register.ejs.
- Moved style.css to public folder and updated app.js to serve static files.
- Added auth middleware to protect student routes.

How to run:
1. npm install
2. Start MongoDB (e.g., mongod)
3. npm start (or node app.js)
4. Visit http://localhost:3000

Notes:
- Default session secret is for demo only. Use environment vars in production.
- To test index usage, run in Mongo shell:
  use StudentDB
  db.students.find({ name: /ahmed/i }).explain("executionStats")
