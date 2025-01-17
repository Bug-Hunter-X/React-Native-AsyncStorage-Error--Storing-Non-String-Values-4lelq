# React Native AsyncStorage Error: Storing Non-String Values

This repository demonstrates a common error in React Native when using AsyncStorage to store non-string values, along with its solution.

## Problem

AsyncStorage in React Native only supports storing strings.  Attempting to store objects or arrays directly will result in data storage failure, often with an unclear error message.

## Solution

The solution involves stringifying objects and arrays before storing them in AsyncStorage and parsing them back into their original data types after retrieval.  This ensures compatibility with AsyncStorage's string-only limitation.

## Setup

1. Clone this repository.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.
4. Run `npx react-native run-android` or `npx react-native run-ios` to run the app.