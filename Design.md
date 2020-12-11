CalTrack Design Document
A Requirement for CSE143  | 12/11/2020 | Jaden Wang, Justin Banusing, Riley Malone

 

I.	Description
CalTrack is a smart calorie tracker built using React Native that allows users to track their calorie intake throughout the day and week, as well as learn more about the food they’re eating by retrieving its nutritional value by scanning the barcode. The project was built primarily for Apple iOS, but can also be run on Web and Android. 

II.	Project Goals
●	Show what food items the user has eaten during the day, as well as their calorie counts.
●	Show the user’s daily calorie intake as a summed value.
●	Allow the user to input the food they’ve eaten, adding it to the tracker.
●	Allow the user to scan barcodes and automatically retrieve the nutritional value of the food associated with it.

III.	Tech Stack
●	React Native - A mobile app development framework for JavaScript that’s a spin-off of the popular ReactJS framework. We used this to develop the core of the application itself since it is flexible and straightforward.
●	React Native Elements - A UI toolkit for React Native. We used this to fast-track the visual components of the application.
●	Redux - A library for managing the application’s state. We used this to make sure the application with all its moving parts behaved consistently.
●	Expo - A platform for quick development of multi-platform mobile apps. We used this to ease the development of the app across different platforms. 
●	Expo Barcode Scanner - A React component for Expo that allows us to scan barcodes through the application itself. We used this for the food scanning functionality.
●	Edmam - An online database of recipes and food items. We used its API as reference for our food data. 

IV.	Features & Descriptions
●	Summary Screen
○	Daily Intake - Shows how many calories the user has taken in over the past day.
○	Daily Eats - Shows a chronological ordered list of the food items the user has eaten over the last 24 hours, as well as their nutrition value.
●	Scanning Screen
○	Food Search - Allows the user to search for food in the Edmam database/API using keywords.
○	Food Scan - Lets the user scan a barcode and retrieves the nutritional value of the food associated with said barcode from the Edmam database/API/
