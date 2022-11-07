# React-DatePicker-hDelahaye

React-DatePicker, created by Hugo DELAHAYE aims to provide your project with the possibility to have a calendar based on an Input, visually identifiable.

Features include:

- The user can navigate the calendar by moving to the next and previous month with two arrow icons
- The user can return to the current month by clicking on the house icon
- The user can choose the month via a selector that offers all possible months
- The user can choose the year via a selector that offers all possible years
- As a developer, you have the possibility to choose the minimum year that will be proposed in the calendar and the maximum year
- As a developer, you have the possibility to choose the language of the calendar. This will impact the days of the week as well as the list of months
- As a developer, you have the possibility to customize the calendar via the class-toggle
- The returned date will have the format you want. This format is based on method of date-fns library

# Installation and usage

You can add this package to your project with this command :

```
yarn add react-datepicker-hdelahaye
```
or this command :
```
npm install react-datepicker-hdelahaye
```

Then use it in your app:

```js
import React, { useState } from 'react';
import Select from 'react-select';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

export default function App() {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className="App">
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
      />
    </div>
  );
}
```

## Props

Common props you may want to specify include:

- `autoFocus` - focus the control when it mounts
- `className` - apply a className to the control
- `classNamePrefix` - apply classNames to inner elements with the given prefix
- `isDisabled` - disable the control
- `isMulti` - allow the user to select multiple values
- `isSearchable` - allow the user to search for matching options
- `name` - generate an HTML input with this name, containing the current value
- `onChange` - subscribe to change events
- `options` - specify the options the user can select from
- `placeholder` - change the text displayed when no option is selected
- `noOptionsMessage` - ({ inputValue: string }) => string | null - Text to display when there are no options
- `value` - control the current value

See the [props documentation](https://www.react-select.com/props) for complete documentation on the props react-select supports.

## Controllable Props

You can control the following props by providing values for them. If you don't, react-select will manage them for you.

- `value` / `onChange` - specify the current value of the control
- `menuIsOpen` / `onMenuOpen` / `onMenuClose` - control whether the menu is open
- `inputValue` / `onInputChange` - control the value of the search input (changing this will update the available options)

If you don't provide these props, you can set the initial value of the state they control:

- `defaultValue` - set the initial value of the control
- `defaultMenuIsOpen` - set the initial open value of the menu
- `defaultInputValue` - set the initial value of the search input

## Methods

React-select exposes two public methods:

- `focus()` - focus the control programmatically
- `blur()` - blur the control programmatically

## Customisation

Check the docs for more information on:

- [Customising the styles](https://www.react-select.com/styles)
- [Using custom components](https://www.react-select.com/components)
- [Using the built-in animated components](https://www.react-select.com/home#animated-components)
- [Creating an async select](https://www.react-select.com/async)
- [Allowing users to create new options](https://www.react-select.com/creatable)
- [Advanced use-cases](https://www.react-select.com/advanced)
- [TypeScript guide](https://www.react-select.com/typescript)

## TypeScript

The v5 release represents a rewrite from JavaScript to TypeScript. The types for v4 and earlier releases are available at [@types](https://www.npmjs.com/package/@types/react-select). See the [TypeScript guide](https://www.react-select.com/typescript) for how to use the types starting with v5.

# Thanks

Thank you to everyone who has contributed to this project. It's been a wild ride.

If you like React Select, you should [follow me on Twitter](https://twitter.com/jedwatson)!

Shout out to [Joss Mackison](https://github.com/jossmac), [Charles Lee](https://github.com/gwyneplaine), [Ben Conolly](https://github.com/Noviny), [Tom Walker](https://github.com/bladey), [Nathan Bierema](https://github.com/Methuselah96), [Eric Bonow](https://github.com/ebonow), [Mitchell Hamilton](https://github.com/mitchellhamilton), [Dave Brotherstone](https://github.com/bruderstein), [Brian Vaughn](https://github.com/bvaughn), and the [Atlassian Design System](https://atlassian.design) team who along with many other contributors have made this possible ❤️

## License

MIT Licensed. Copyright (c) Jed Watson 2022.