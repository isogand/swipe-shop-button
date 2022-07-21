# React Native swipe-shop-button

<!-- ## Introduction -->

<div>
<h3> A demo <h3>
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
import React  from "react";
import {StyleSheet, View} from "react-native";
import SwipeButton from "@isogand/swipe-shop-button"

const App = () => {

    return (

        <View style={styles.switchContainer}>
            <SwipeButton
                backgroundColor="#FFC701FF"
                onChange={console.log}
                labelContainer={console.log}
                value
            />
        </View>

    );
};
export default App;

const styles = StyleSheet.create({
    switchContainer: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#171616',
    },
});
 ```

