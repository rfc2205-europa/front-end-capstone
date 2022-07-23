# Hack Reactor: Front End Capstone

## Tale of Contents:
  1. Overview
  2. Team Members
  3. Description
  4. Installation Instructions

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
