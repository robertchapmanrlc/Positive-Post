# Positive Post
A web application that allows users to send positive messages to others. Once a message is sent, a random message from another user is given.

## Web Application Structure
![Web Application Structure](https://i.ibb.co/DzkdPw8/Positive-Post-Structure.png)

When users submit a message, a Hugging Face machine learning model determines how positive the message is through sentiment analysis. Messages that reach the required threshold for positive messages are sent to the PostgreSQL database. Users are then redirected to a page to receive a random message from another user.

## Built With
* Next.js
* TypeScript
* TailwindCSS
* PostgreSQL
* Drizzle ORM
* HuggingFace (MLM)