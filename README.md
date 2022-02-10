# automate
automate is an Electron JS based source management program with Azure DevOps and Github integration. automate focuses on streamlining workflow tasks such as changing branches across enterprise workspaces and solutions, as well as tagging multiple repositories at the same time.


 [![Screenshot of the landing page.](images/landing.png)]()

## Features
* **Branch management:** automate branch management across enterprise workspaces and solutions to organize your workflow 
* **Tagging multiple repositories:** tag multiple repositories simultaneously to optimize your performance
* **User-oriented:** planned real-time theme customization for a user experience that fits your personal needs


## Installation
1. Install [Node.js](http://nodejs.org/en/) - the recommended version is 14.0.0 or above
2. Download automate files and extract them to a new folder
3. Open command prompt and navigate to the root directory for automate
4. Run `npm install` to install local dependencies
5. Run `npm start` to launch the program


## Contribute
User feedback for automate is welcomed and encouraged. Every contribution helps to develop the project further

There are many ways for you to contribute to the project: 

* Log [bugs and report issues](https://github.com/tacosontitan/automate/issues), and help verify reports
* Verify [changes to source code](https://github.com/tacosontitan/automate/pulls)
* Review the [documentation](https://github.com/tacosontitan/automate/pulls) and submit pull requests for any edits ranging from typos to new content


## Configuration
There are three configuration requirements for running automate:

 - `config.json`: This is the primary configuration data.
 - `flux.json`: This is configuration data that can be overridden.
 - `secrets.json`: As the name implies, this is secret configuration data.

### Flux Data
The `flux.json` file is considered the primary configuration for running automate in a standardized environment. In order to override the data in this configuration file, simply create a file in the same directory named `flux.dev.json` and override the existing values. The `flux.dev.json` file is ignored using the `.gitignore` file, so it won't be commited to source control at any point.

<sub>Contrary to popular belief, `flux.dev.json` isn't representing a developer file, it's representing a deviation for the `flux` data.</sub>

### Secrets
The `secrets.json` file is an empty shell representing all of the configurable secret data in the application. In order to use the application, you'll need to create a copy of this file named `secrets.dev.json` and populate it with your personal data.

## License
Licensed under [GNU General Public License v2.0](/LICENSE)
