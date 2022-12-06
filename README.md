<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://user-images.githubusercontent.com/57758789/205992949-7481bf79-245d-439f-beaf-5d500372fcc5.png" alt="Project logo"></a>
</p>

<h3 align="center">NewsApp</h3>


<div align="center">

  [![Status](https://img.shields.io/badge/status-active-success.svg)]() 
  [![GitHub Issues](https://img.shields.io/github/issues/kylelobo/The-Documentation-Compendium.svg)](https://github.com/kylelobo/The-Documentation-Compendium/issues)
  [![GitHub Pull Requests](https://img.shields.io/github/issues-pr/kylelobo/The-Documentation-Compendium.svg)](https://github.com/kylelobo/The-Documentation-Compendium/pulls)
  [![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center"> A News App which host news articles from different sources. 
    <br> 
</p>


## 📝 Table of Contents
- [About](#about)
- [Getting Started](#getting_started)
- [Built Using](#built_using)
- [Authors](#authors)

## 🧐 About <a name = "about"></a>
 A News App which host news articles from different sources. 

## Screenshots
<div style={{flex:1}}>
<img src="https://user-images.githubusercontent.com/57758789/205992391-c33b8d68-7084-47fd-8727-8967560b50d9.png" width="300" height="600" />
<img src="https://user-images.githubusercontent.com/57758789/205460805-bfe7076d-8bb0-4109-8c2b-2019481cd570.png" width="300" height="600" />
<img src="https://user-images.githubusercontent.com/57758789/205992402-72f03a49-ef74-40b5-8ee1-4e02983ffceb.png" width="300" height="600" />
</div>

## 🏁 Getting Started <a name = "getting_started"></a>
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.

### Prerequisites
Node.js should be installed version v16.4.2 or above.
Android SDK & Android Studios

To install Node.js follow the link below
```
https://nodejs.org/en/download/

https://developer.android.com/studio
```

### Installing
To run the application, find you must clone this repo using 
```
git clone https://github.com/Babitdor/news-feed-react-native.git
```
Open the root directory and run the follow
```
npm instaLL
```
This will install all the necessary dependencies required for the application.

Once done, you can run the application using the following.

#### Using Physical Android Device
* Make sure your physical android device is connected via USB cable 
* Make sure that USB debugging is turned on under Developer Options.
* To check if device is connected to ADB, open 'cmd' type in 'adb devices'

#### Using Virtual Emulated Android Device
Make sure your virtual android device using Android Studios.
* Open Android Studios
* Under More Actions
* Select Virtual Device Manager
* Setup an android device, this will require you to install certain dependencies.
* Once done, click on the play button next to the android device selected, to run the Emulated Device.


Once device is setup, you are ready to run the application.

Type the following command in the terminal referencing the root path of the app directory.
```
npx react-native run-android
```
This will run the application and launch a Metro server along with it.

## ⛏️ Built Using <a name = "built_using"></a>
- [Firebase](https://firebase.google.com) - Database
- [React Native](https://reactnative.dev) - React JS-based Mobile framework
- [NodeJs](https://nodejs.org/en/) - Server Environment
- [React Redux](https://react-redux.js.org) - State Management

## ✍️ Authors <a name = "authors"></a>
- [@Babitdor](https://github.com/Babitdor) - Idea & Initial work
