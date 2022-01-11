# PROJECT: Resumov

![Team Photo](https://user-images.githubusercontent.com/51734801/117523005-6b8eda00-af84-11eb-88cc-781ae657319a.jpg)

[*how?*](https://help.github.com/articles/about-readmes/#relative-links-and-image-paths-in-readme-files)

[Client Link](https://resumov.netlify.app/)
[API Link](https://cs52access.herokuapp.com/)

## Description

Resumov is a web application that enables users to generate multiple portfolio websites by filling in fields from their resume. Users will input information regarding their education, work experiences, projects, etc., and the web application would generate a portfolio of their choice according to the templates we have created. They are also able to customize their portfolio websites, which includes the content and the styles.

## Mockup (ABOVE AND BEYOND): 

<img width="540" alt="Screen Shot 2021-05-19 at 12 51 22 AM" src="https://user-images.githubusercontent.com/47261209/118758368-ee454e00-b83c-11eb-9e70-69e90ea483d2.png">

[Figma](https://www.figma.com/file/rzPevXjui8fvEtwhwvw1wt/Mockups?node-id=0%3A1) 


## Architecture

TODO:  descriptions of code organization and tools and libraries used

- Material-UI: https://material-ui.com/
- Fab API: https://material-ui.com/api/fab/
- Textareaautosize:https://material-ui.com/components/textarea-autosize/
- React-markdown: https://github.com/remarkjs/react-markdown
- TLDR: https://github.com/tldr-pages/tldr

## Setup

Start by cloning the git repository.
````
$ git clone https://github.com/dartmouth-cs52-21S/project-access.git
````
Then change your directory to the project
````
$ cd project-access
````
Install all packages using npm
```
$ npm install
```
To run the web app locally, do
```
$ npm start
```
Now, the frontend is running locally. To connect to the backend ensure that both the backend and frontend are running. Go to [backend](https://github.com/dartmouth-cs52-21S/project-api-access.git) to set it up.

## Deployment

- [Netlify](https://resumov.netlify.app/): We will deploy our app via Netlify, as we have done with previous assignments
- [HerokuApp](https://cs52access.herokuapp.com/): We will be our live running server, that we will use to host our javascript/node server program
- [Mongodb](https://www.mongodb.com/): Will be our database were we store:
- [AWS S3](https://s3.console.aws.amazon.com/) : Used to generate and store image urls which will also be stored on the backend.
    * UserSchema:
        1. firstName: { type: String },
        1. lastName: { type: String },
        1. email: { type: String, unique: true, lowercase: true },
        1. password: { type: String },
        1. portfolioIds: [String],
        1. profileUrl: { type: String },
    * PortfolioSchema:
        1. name: String,
        1. header: Object,
        1. aboutMe: Object,
        1. projects: Object,
        1. contactMe: Object,
        1. resume: Object,
    * ImageSchema:
        1. url: String,

    For every portfolio created by a specific email, it will be appended to a user's portfolioIds list. profileUrl links to a user's profile image which can be changed in the settings page. 

    In the PortfolioSchema, name refers to name of the portfolio. Header, aboutMe, projects, contactMe are jsons that would store the styles (flex direction, font size, font, etc.) accordingly which would be rendered on the frontend accordingly. Each portfolio has one resume which would be a json containing all the content (Work experience, skills, languages, etc.) that a user has filled in when creating a portfolio.

If you have deployed your backend to heroku sucessfully, go to your [frontend actions](https://github.com/dartmouth-cs52-21S/project-access/blob/master/src/actions/index.js) and make your root_url your deployed backend url
```
export const ROOT_URL = '<Deployed Url>/api';
```

## Issues

Created specific to dos that breaks website pages into smaller chunks. See milestones for things we wish to accomplish. Notes taken while deciding this:

<img width="540" alt="Screenshot 2021-05-22 at 11 35 48 PM" src="https://user-images.githubusercontent.com/51734801/119247330-80f42e80-bb56-11eb-833a-946373c624b9.png">

<img width="542" alt="Screenshot 2021-05-22 at 11 35 57 PM" src="https://user-images.githubusercontent.com/51734801/119247331-818cc500-bb56-11eb-95c8-446a8911aca8.png">

## Features

## Brief Summary

* What worked

It is nice that each portfolio was able to have its own resume content such that users can create multiple portfolios for different purposes and share these different portfolio links to different users respectively. It is also nice that each user was able to upload their own profile image and change it whenever they want on the settings page. We also managed to connect our app to AWS S3 services and generated a unique id each time a new image was created on AWS S3 and stored that url and id to mongodb. We also made the customize page much more user friendly by inputting color pickers and live preview of the styling.

* What didn't work

1. Thinking about how to store the portfolio styles was challenging
1. Determining the fields we need for the resume was also challenging


* Features we would've implemented with more time

1. Other Authentication services - Facebook, Google, Github
1. Mobile view version
1. A live view of the full portfolio during customizing
1. A pdf document reader which takes an uploaded resume pdf and autofill the fields to generate a portfolio accordingly

## Key Features

1. Generating and managing multiple portfolios each with its own resume content
    1. Create portfolio
    2. Update portfolio content / resume
    3. Delete portfolio
    4. View portfolio
    5. View all portfolios

1. Customizing portfolios' styles easily

## Features

1. Sign In page

1. Sign Up page

1. Landing Page

1. Settings page
    1. User profile (First name, last name, email, profile picture) changes

1. Project images
    1. Uploading and changing images 

1. Clicking on Resumov does not route to landing page when signed in

1. Allow user to pre-populate resume fields with user's existing portfolios

## Authors

- [Aadhya](https://github.com/AadhyaKocha)
- [Luca](https://github.com/lucalit888)
- [Vico](https://github.com/Vicolee)
- [Jaime](https://github.com/themotivation12)
- [John](https://github.com/johnbkariuki)


## Acknowledgments
Professor Tregubov and Samiha Datta for their supervision of our project!
