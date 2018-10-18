# react-microsite

A react router microsite with json data navigation  / content setup and sass + bulma framework.

package.json contents:

* Javascript libraries / build:  React 16.4.2, React DOM 16.4.2, React Router 4.3.1, Axios, Babel , d3.js and react-anime
* Stylesheet/ preprocessors / frameworks: sass & bulma (flexbox framework)



### running the build
---
Assuming that your local dev environment has node.js / nvm, webpack and yarn installed please proceed through the steps below:
1. Clone/ Download the project folder into your local environment
2. Run "yarn install" to download the packages as written on the package.json.
3. Run "npm run build" on the command line to build the project.
4. Run "npm run dev" to get the localhost server up and running.

### Setting file paths for React Router & Axios
---
 * I have found file paths to be an issue with React Router and Axios when deploying this in a subdirectory of a server and made a file which consist of configuration settings called "axiosOptions.jsx" located in "./src" folder.
 * Changing the basePath variable to be the same as the webpack.config.js "PUBLIC_PATH" should fix file path issues.


### Packaging
---
1. Make sure the file paths are set correctly before deploying i.e if the hosting url of this microsite is http://hostname.com/subdirectory then the webpack.prod.js PUBLIC_PATH value should be "/subdirectory" along with the basePath = "/subdirectory" in axiosOption.jsx
2. Run the command "npm run prod" should minify the build into the "prod" folder with the correct filepath settings.