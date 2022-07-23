# Hack Reactor: Front End Capstone

## Tale of Contents:
  1. Overview
  2. Team Members
  3. Description
  4. Installation Instructions

## Overview:
  The assignment for this Hack Reactor senior project was to implement a single page shopping e-commerce website. Users will be able to interact with the UI that is updated by an API to, view products, questions and answers and related ratings and reviews. 

Given a wireframe design, our group of three software engineering students had to develop a front-end project reflecting the design and following a list of features requirements.


## Team Members:
  - David Kroll - Product Overview Component
  - Joe Shultz - Questions And Answers Component
  - Candace Gu - Ratings And Reviews Component

## Description:
  Products can be search and selected from the upper right search bar.  This will populate the page with product information, that can be viewed, and edited with in the individual components.  
 
 The Product Overview allows a user to toggle through a carasel of a styles images, select new styles and view their images, as well as add products to the cart. 
  
 The Questions and Answers Module allows users to view all of the questions and corresponding answers to a specific product.  The user also has the ability to add questions for a product, and add answers for a question related to a product.  The existing questions and answers may be be reported for review by the user and may also be marked as helpful.  
  
  The Ratings and Reviews Module 
  
## Installation Instructions:
  Our application uses dependencies such as: React, Express, Axios, webpack, and babelrc. The developer will require node to be installed. You will then need to run npm install to install the dependencies, and you will also need to run the npm commands to start webpack and the server. The developer will also need their own config files conatining a GitHub personal access token and a cloudinary key, in order to use the image upload function.

Install all packages by running the following commands in your terminal:
- npm install

Start the server:
- npm run server

On a separate terminal, run webpack:
- npm run build

Rename the example.config.js file to config.js

Insert your own GitHub personal access token and cloudinary token into the config.js file.

Open the project in your web browser. http://localhost:3000/
  
  
  
  
  
  
---
## Interacting with the middleman server:
To make a get request:
  - make a get request to the server that looks like:
  ```json
  {
    "api": "https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/products"
  }
  ```
### Reviews
To post a review:
  - make a post request to the server that looks like:
  ```json
  {
    "api": "https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/reviews?product_id=66642",
    "type": "review",
    "product_id": 5,
    "rating": 5,
    "summary": "a review",
    "body": "review body",
    "recommend": true,
    "name": "username",
    "email": "user@email.com",
    "photos": ["1", "2", "3"],
    "characteristics": {
        "Size": {
        "id": 14,
        "value": "4.0000"
        },
        "Width": {
        "id": 15,
        "value": "3.5000"
        },
        "Comfort": {
        "id": 16,
        "value": "4.0000"
        }
    }
  }
  ```
To mark a review as helpful:
  - make a put request to the server that looks like:
  ```json
    {
      "type": "review",
      "api": "https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/reviews/{review_id}/helpful"
    }
  ```
To report a review:
  - make a put request to the server that looks like:
  ```json
    {
      "type": "review",
      "api": "https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/reviews/{review_id}/report"
    }
  ```
### Questions
To post a question:
  - make a post request to the server that looks like:
  ```json
  {
    "type": "questions.question",
    "api": "https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/qa/questions/{question_id}",
    "body": "question body",
    "name": "name",
    "email": "email",
    "product_id": 592986
  }
  ```
To mark a question as helpful:
  - make a put request to the server that looks like:
  ```json
  {
    "type": "question",
    "api": "https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/qa/questions/{question_id}/helpful"
  }
  ```
To report a question:
  - make a put request to the server that looks like:
  ```json
  {
    "type": "question",
    "api": "https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/qa/questions/{question_id}/report"
  }
  ```
To post an answer:
  - make a post request to the server that looks like:
  ```json
  {
    "type": "questions.answer",
    "api": "https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/qa/questions/{question_id}/answers",
    "body": "question body",
    "name": "name",
    "email": "email",
    "photos": ["1","2","3"]
  }
  ```
To mark an answer as helpful:
  - make a put request to the server that looks like:
  ```json
  {
    "type": "answer",
    "api": "https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/qa/answers/{answer_id}/helpful"
  }
  ```
To report an answer:
  - make a put request to the server that looks like:
  ```json
  {
    "type": "answer",
    "api": "https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/qa/answers/(answer_id)/report"
  }
  ```
