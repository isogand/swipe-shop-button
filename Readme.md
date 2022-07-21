# React Native Sliding Counter

<!-- ## Introduction -->

<div>
<h3> A demo <h1>
 </br>

![](https://github.com/isogand/swipe-shop-button/blob/master/public/image/demo.gif)</div>

This library provides...

* feature 1
* feature 2

## Quick Start

### Installation

```bash
yarn add @isogand/swipe-shop-button
```

or 

```bash
npm install @isogand/swipe-shop-button
```
 
## Usage

 ```tsx
  import React,  from 'react';
  import { View,StyleSheet, Text } from 'react-native';
  import { GestureHandlerRootView} from 'react-native-gesture-handler';
  import SlidingCounter from '@isogand/swipe-shop-button';
  
  
  export default function App() {
      return (
        <GestureHandlerRootView style={{flex:1}}>
          <View style={styles.container}>
            <SlidingCounter / >
          </View>
        </GestureHandlerRootView>
      );
  }
 const styles = StyleSheet.create({
   container: {
        flex: 1,
        backgroundColor: '#656565',
        alignItems: 'center',
        justifyContent: 'center',
  },
});
 ```

