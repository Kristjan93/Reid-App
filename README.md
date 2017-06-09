# Reid-App

## Table of Contents

  1. [Basic Rules](#basic-rules)
  1. [Bla](#bla)

## Basic Rules
### Import statements group order.
  1. External library's or utilities.
  2. Material-ui components.
  3. Imports found under the variables directory.
  4. Common then implemented components.
  ```jsx
  // First group.
  import React from 'react';
  import Radium from 'radium';

  // Second group.
  import AppBar from 'material-ui/AppBar';
  import IconButton from 'material-ui/IconButton';
  import MenuIco from 'material-ui/svg-icons/navigation/menu';

  // Third group.
  import { mediaBreakpoints } from '/imports/ui/variables/breakpoints.js';

  // Forth group.
  import FacebookIcon from '/imports/ui/common/customSvg/FacebookIcon.jsx';
  import HeaderNavMenu from './Header/HeaderNavMenu.jsx';
  ```

### Only use Class components when state must be maintained and stateless otherwise.
  ```jsx
  // Good.
  class HelloWorld extends Component {
    constructor(props) {
      super(props);
      this.state = {
        helloWorld: 'Hello World!' 
      };
    }
    render() { return (<div>{this.state.helloWorld}</div>); }
  };

  // Bad, has no state uses class.
  class HelloWorld extends Component {
    render() { return (<div>Hello World!</div>); }
  };

  // Good, uses functional component.
  const HelloWorld => {
    return (<div>Hello World!</div>);
  };
  ```


  - Try to keep file structure flow natural and logical.
    - While project is small high level components have only one directory containing all sublevel child components. 
    - Do to some idiomatic tendencies of developers of establishing the 'right way' for file structure there is no definite way of doing it.  Unlike Angular.
## Bla
