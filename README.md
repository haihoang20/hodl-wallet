# HODL WALLET

## Table of Contents

* [Quick Usage](#quick-usage)
* [Getting Started](#getting-started)
  * [Requirements](#requirements)
  * [Local Development](#local-development)
  * [Local Development Using Mobile Device](#local-development-using-local-device)
* [Additional Notes](#additional-notes)

## Quick Usage

This app is ready to go and built in a data-driven manner. Simply edit the JSON object in `src/Utils/Constants.js` to contain your tokens and the amounts you own of each. You should also find images for each of your tokens otherwise it will default to Dogecoin. 

You can then push the app out to your own Expo account to use it on your phone.

## Getting Started

### Requirements
* node
* yarn
* An iOS or Android device on the same local network as your computer
* The Expo (https://github.com/expo/expo) App installed onto your iOS or Android device

### Local Development

1. Clone this project
2. `yarn install`
3. `yarn run ios` or `yarn run android`

### Local Development Using Mobile Device

1. Clone this project
2. `yarn install`
3. `yarn start`
4. Open the Expo App on your mobile device, which must be connected to the same local network (usually same WiFi), and scan the QR code in the terminal window
5. Wait for the app to finish packaging and it will be viewable on your phone

## Additional Notes
* [Road Map](docs/ROADMAP.md)
* [Create React Native App README](docs/create-react-native-README.md)
