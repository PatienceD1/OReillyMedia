# O'Reilly Front End Coding Exercise

The exercise is a small project for you to complete that looks like a small task you might do at O'Reilly. There is no online coding environment or other restriction on how to work — you complete the entire exercise on your device. Use libraries, your favorite IDE and debugger, and whatever else you would use while coding normally.

- We respect all of our candidates' time, so we've structured this exercise to take about 2-3 hours. We encourage candidates to leave comments or descriptions on additional changes or improvements they would make with more time or if they were to continue working on the exercise.
- It's OK to use any coding environment, Stack Overflow, or whatever else you would use when you're coding normally.
- It is **not** OK to copy code verbatim or consult a friend.
- We're looking for simplicity, clarity and code readability over cleverness or flexibility.
- We ask you not share the details of this project with others.
- When you've completed your exercise, create a PR into `main` with your changes.

Below you will find basic setup and deployment instructions for the project.

## Your Tasks

The visual presentation of your app should be built using responsive, mobile-first layout principles. The Books view should match the below image relatively closely; we are less concerned about the explicit sizes and fonts than we are with the general layout (it's difficult working from just an image file!).

![content grid layout of cards with thumbnails](https://cdn.oreillystatic.com/FE-Dev-Test/books-design.png)

1. Build out the HTML/CSS for the BookList and BookItems components to match the visual design provided above, using responsive/mobile-first layout principles.
2. Update the BookItem component to enable a user to rate a book.
    - _For the purposes of this exercise, you can just update the `averageRating` field directly on the book model if you want._

**AND choose 1** task from the following list to complete as well:

- Create a view that displays the publishers. When styling the publishers view, you may have more creative license for styling and layout.
- Improve the overall accessibility of the app.
- Add a search or filter field to the books display.

## My Result
- This is the front end of the application ![content grid with layout](https://user-images.githubusercontent.com/76121361/127558933-a003e38f-c502-425f-bd1d-a2571df5c6d1.PNG)
- This is what it looks like mobily ![content grid mobily](https://user-images.githubusercontent.com/76121361/127559253-e18c47b3-95cc-4351-82e5-b5f36eaa8209.PNG)

## Running the Application

The application is a simple `react` application that uses [json-server](https://github.com/typicode/json-server) to handle serving the built javascript and html pages as well as serve as the API for the service. The API is a simple `json` file located in `api/db.json`.

### Very First Time

This assumes that you've already installed node and a package manager such as `yarn` or `npm`.

```
$ yarn install
$ yarn start
```

If you followed the installations steps above, you should be able to view your front end project locally at http://localhost:3000/

## Tests

To run the JS tests use:

`yarn test`
