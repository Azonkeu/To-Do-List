# To-Do-List

## Set up a To-Do-List webpage with webpack

In this project, we will build a simple HTML list of To Do tasks. The list will be styled according to the specifications listed later in the future activities. This simple web page will be built using webpack and served by a webpack dev server.

### Project requirements

 - Make sure that there are [no linter errors](https://github.com/microverseinc/linters-config).
 - Make sure that you used correct [GitHub Flow](https://github.com/microverseinc/curriculum-transversal-skills/blob/main/git-github/articles/github_flow.md).
 - Make sure that you documented your work [in a professional way](https://github.com/microverseinc/curriculum-transversal-skills/blob/main/documentation/articles/professional_repo_rules.md).
 - Set up a new project with webpack following the following steps:
      - First set up a new GitHub repository for this exercise.
      - Follow the instructions from the [getting started](https://webpack.js.org/guides/getting-started/#basic-setup) guide to set up the basics. Implement all the steps from Basic Setup to *NPM Scripts*.
      - The next step in building your webpack boilerplate is to add some style to it. 
      -  Follow the instructions from the [setting up HtmlWebpackPlugin](https://webpack.js.org/guides/output-management/#setting-up-htmlwebpackplugin) guide. Be extra careful when updating the module.exports object in your webpack.config.js file, to not to make any nesting mistakes.
      - Follow the steps in [loading CSS](https://webpack.js.org/guides/asset-management/#loading-css) guide.
  

         ** Setup local dev server **
      *Follow the using [webpack-dev-server](https://webpack.js.org/guides/development/#using-webpack-dev-server) guide and set it up on your local machine. Again, be cautious with updating the module.exports object in your webpack.config.js.*
  
 - Create an index.html file and write your HTML markup here. Create an empty To Do List placeholder (`<div>` or `<ul>` element). The index.html file must be set as a template using the *HTML Webpack Plugin*.
 - Create an index.js file and set an array of some simple to do tasks (array of objects). Each task object should contain three keys:
         i. description [`string`].
         ii. completed [`bool`].
         iii. index: [`number`].

 - Write a function to iterate over the tasks array and populate an HTML list item element for each task.
 - On page load render the dynamically created list of tasks in the dedicated placeholder. The list should apear in order of the `index` values for each task.
 - Create a **style.css** and set rules for the **To Do List**. CSS must be loaded by *Webpack Style/CSS Loader*. Your list should be a clone of the part of the minimalist project captured in the image below.

 ![image](https://camo.githubusercontent.com/d04bee7a5b8f62cc6655dbec65c4d14583e4d78d0c434ddc070f6881bb9568fc/68747470733a2f2f696d672e796f75747562652e636f6d2f76692f416355642d5f596a6a71672f302e6a7067)

 ## Live Demo

 Check out my [repository](https://github.com/Azonkeu/To-Do-List) for more details.

 ## Built With

  - Major languages: Html5, Css3, Markdown
  - Technologies used: Github, Git, Vscode
  
 ## Author
  - Github: [@Azonkeu](https://github.com/Azonkeu)
  - LinkedIn: [@AzonkeuO](https://www.linkedin.com/in/azonkeu-ornela-88a14b172/)

 ### Show your support

  Give a ⭐️ if you like this project!

 ## License

 This project is [MIT](https://github.com/Azonkeu/To-Do-List/blob/main/LICENSE) licensed.