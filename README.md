# 18 NoSQL: Social Network API

## MongoDB Introduction

MongoDB is a popular choice for many social networks due to its speed with large amounts of data and flexibility with unstructured data. Over the last part of this course, you’ll use several of the technologies that social networking platforms use in their full-stack applications. Because the foundation of these applications is data, it’s important that you understand how to build and structure the API first.

## User Story

```md
AS A social media startup
THE USER WANTS an API for the user's social network that uses a NoSQL database
SO THAT the user's website can handle large amounts of unstructured data
```

## Acceptance Criteria

```md
GIVEN a social network API
WHEN user enters the command to invoke the application
THEN user's server is started and the Mongoose models are synced to the MongoDB database
WHEN user opens API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN user tests API POST, PUT, and DELETE routes in Insomnia
THEN user is able to successfully create, update, and delete users and thoughts in my database
WHEN user tests API POST and DELETE routes in Insomnia
THEN user is able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

## Installation

`npm i`
`node server.js`

## Links

-   Github repo: https://github.com/Abesmom4ever/18-NoSQL-Homework

---

© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
