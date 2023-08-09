# Coder Habit Tracker App
> The habit tracker app allows users to add and track multiple habits daily. It displays the status of each habit for the last 7 days and allows users to toggle between the three statuses (done, not done, none). All habit data is stored in a database for easy retrieval, and the app can also track the user's longest streak and total completion days. Overall, the app is a useful tool for developing positive habits and staying motivated.

![4](DEMO/Screenshot 2023-08-09 234200.png)

## Features 
- Add multiple habits to track.
- Track each habit every day.
- View all current habits.
- Display 7 days of each habit.
- Toggle between the three statuses.
- Store data in a database.

## Technologies Used
1.  NodeJS
2.  Express
3.  MongoDB
4.  EJS

### 📚 Libraries:
- connect-flash
- express-ejs-layout
- ejs
- mongoose
- express-session
- cookie-parser
- connect-mongo
- dotenv
- express

## Installation

##### Install NPM dependencies

`npm install`

##### Start your app

`npm start`

#### The Server should now be running at http://localhost:8000/

## Folder Structure
📦coder-habit-tracker
┣ 📂DEMO ----> Some screenshoots of project
┣ 📂assets
┃ ┗ 📂css
┃ ┃ ┣ 📜habit.jpg
┃ ┃ ┗ 📜styles.css
┣ 📂config
┃ ┗ 📜mongoose.js
┣ 📂controllers
┃ ┣ 📜dashboard_controller.js
┃ ┣ 📜home_controller.js
┃ ┣ 📜updateHabitStatus_controller.js
┃ ┗ 📜user_controller.js
┣ 📂models
┃ ┣ 📜Habit.js
┃ ┗ 📜User.js
┣ 📂routes
┃ ┣ 📜index.js
┃ ┗ 📜users.js
┣ 📂views
┃ ┣ 📂partials
┃ ┃ ┗ 📜messages.ejs
┃ ┣ 📜dashboard.ejs
┃ ┣ 📜home.ejs
┃ ┣ 📜layout.ejs
┃ ┣ 📜login.ejs
┃ ┗ 📜register.ejs
┣ 📜.env
┣ 📜.gitignore
┣ 📜app.js
┣ 📜package-lock.json
┣ 📜package.json
┗ 📜README.md

## Credits
This project was developed by Subhanshu tripathi as a coding exercise. It is not intended for production use.

## License
This project is licensed under the MIT License. Feel free to use and modify the code as you see fit.
<img width="1075" alt="Screenshot 2023-08-09 234054" src="https://github.com/subhanshu12/Habit_Tracker_CN/assets/101986633/50a8470a-e7c2-4d07-a44e-5dbc208ab1f6">
<img width="1077" alt="Screenshot 2023-08-09 234113" src="https://github.com/subhanshu12/Habit_Tracker_CN/assets/101986633/c9d30367-fc90-4f87-b097-270972e77bb2">
<img width="1069" alt="Screenshot 2023-08-09 234140" src="https://github.com/subhanshu12/Habit_Tracker_CN/assets/101986633/30198a22-dd5b-49bf-b8f6-de4fbf045b48">
<img width="1076" alt="Screenshot 2023-08-09 234200" src="https://github.com/subhanshu12/Habit_Tracker_CN/assets/101986633/4418a264-b4a2-4c85-8cc2-fdff55707066">
<img width="1074" alt="Screenshot 2023-08-09 234222" src="https://github.com/subhanshu12/Habit_Tracker_CN/assets/101986633/d6e0fb87-bb50-4976-a86f-3d5aaa1a4836">






