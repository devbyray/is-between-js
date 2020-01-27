# IsBetween.js

[![Build Status](https://travis-ci.com/raymonschouwenaar/is-between-js.svg?branch=master)](https://travis-ci.com/raymonschouwenaar/is-between-js)
[![npm version](https://badge.fury.io/js/is-between-js.svg)](https://badge.fury.io/js/is-between-js)

## Install

```
npm i is-between-js
```

## How to use?

You can import the isBetween function in your JavaScript/TypeScript file and use it like this!

The TypeScript types are included in the library.

```javascript
import { isBetween } from 'is-between-js'

isBetween(1).min(0).max(10).calc() // returns true
isBetween(10).min(0).max(9).calc() // returns false
```

or

```javascript
import { Between } from 'is-between-js'

const between = new Between()

between.value(1).min(0).max(10).calc() // returns true
between.value(10).min(0).max(9).calc() // returns false
```