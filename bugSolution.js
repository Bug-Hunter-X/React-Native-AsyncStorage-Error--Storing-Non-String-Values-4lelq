```javascript
import AsyncStorage from '@react-native-async-storage/async-storage';

// Store data (correctly)
const storeData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.error('Error storing data:', e);
  }
};

// Retrieve data (correctly)
const getData = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.error('Error retrieving data:', e);
  }
};

// Example usage:
const myObject = { name: 'John Doe', age: 30 };
storeData('@myObject', myObject).then(() => {
    getData('@myObject').then(retrievedObject => {
        console.log('Retrieved object:', retrievedObject);
    });
});
```