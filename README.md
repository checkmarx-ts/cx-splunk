# Cx-Splunk
cx-Splunk is a React App for Splunk to gain information usage, insight Checkmarx's results as well as observe trends across projects.

# Installation

To install Cx-Splunk i.e. the Checkmarx Dashboard, please visit the [wiki here](https://github.com/checkmarx-ts/cx-splunk/wiki/Installation).

# v0.0.1 
1. CxAnalytix - CxAnalytix is a nimble tool to fetch data from Checkmarx CxSAST. 
2. Logs from CxAnalytix are indexed into Splunk.
3. Current version generates dashboards and visualizations based on this data indexed into splunk.

# Prerequisites
* Install [`CxAnalytix`](https://github.com/checkmarx-ts/CxAnalytix). Visit the below section [below](#CxAnalytix) for more information.
* Install [nodejs](https://nodejs.org/en/) 12.x.
* Install Splunk Enterprise locally and have $SPLUNK_HOME env variable setup.
* Install `yarn` as the package manager.
* In Windows environment, to avoid any file permission issues start the command prompt with "Run as Administrator" to run the commands mentioned in the [Development](#development) section.

# Splunk Indexes and permissions
:warning: Note on Splunk Indexes
* Splunk requires data to be indexed. If none are choses, the default destiantion is to the index named `main`.
* When Using a specific index, for instance `cx-splunk-index`, It is essential to ensure that this index `cx-splunk-index` is searchable by default by user roles.
* More documentation is [available here on Splunk Docs](https://docs.splunk.com/Documentation/Splunk/6.4.1/Admin/Indexesconf)
* Troubleshooting indexes docs for Splunk [is here](https://docs.splunk.com/Documentation/ES/6.2.0/Admin/Troubleshootdefaultadminsearches)
* Splunk Role-based access and inheritence is [documented here.](https://docs.splunk.com/Documentation/Splunk/8.0.5/Security/Aboutusersandroles)
* For Advanced Splunkers, Please change authorize.conf for user roles to ensure that Checkmarx Sourcetypes are [searchable by default based on roles] (https://docs.splunk.com/Documentation/Splunk/8.0.5/Security/Addandeditroleswithauthorizeconf)
* You need your index to be part of a default search for Checkmarx Splunk App to work as expected.
* Please beware, that Splunk indexes are immutable. Ensure that your index is as intended.

# CxAnalytix
* `CxAnalytix` is our supported & recommended way to fetch analytical data for Splunk is the key dependency in-order to make use of `Cx-Splunk`.
* `CxAnalytix` [installation guide](https://github.com/checkmarx-ts/CxAnalytix/wiki/Installation) can be found here.
* In-order to forward data to Splunk, We recommend the use of Splunk Universal forwarder. Please read more [here](https://github.com/checkmarx-ts/CxAnalytix/wiki/Splunk) on how to configure Splunk Universal Forwarder.


# Development
* [Getting started - Splunk + React](https://conf.splunk.com/files/2019/slides/DEV1141.pdf)
* `yarn install` - install dependencies.
* `yarn run dev` - start the project in dev mode. This command will symlink the project into your Splunk instance. 
* Restart your Splunk instance if it's the first time you setup this project. `Checkmarx` application should shows up in app bar.


# Cx-Splunk - Creating a new view.
* Follow the below steps to create a new view.
    * Add an xml file in `resources/default/data/ui/views`.
    * Modify `resources/default/data/ui/nav/default.xml` to include your new page.
    * Create a new folder under `src/pages/` with the same name of the new xml file.
    * Create `index.jsx` and bootstrap the page using `@splunk/react-page`.
    * Restart Splunk, your new page should shows up.


# Package the app

Use the following steps to package the Checkmarx Dashboard app. 

Requirements:
* Make
* [Docker](https://docs.docker.com/install/)


# Build Steps
* Run `make build-image` to build the image to package the app.
* Run `make run` to package the app with NodeJS.
    * The app (`tgz`) will be created in the `splunkapps` folder.
* To start Splunk (`8.0`) with the dashboard app run `make start` (username: `admin` password: `changemeplease`).
* If password is changed, update the Makefile
* To remove all containers run `make down`
