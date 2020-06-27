# Hello_React
My first React practice!

# What does it do
Nothing

# Knowledge involved
- JSX
- React components
- Props
- State
- Lifecycle of components (including mounting, updating, and unmounting)
- How to handle events
- How to make simple forms
- Import css file
- Sass

# Study notes
1. JSX is different from HTML although they look similar. JSX is JavaScript XML.
2. JSX is not the only way to write and add HTML in React. You may also use `React.createElement()`. (https://www.w3schools.com/react/react_jsx.asp)
3. Put expressions inside curly braces `{}`. For CSS, use two pairs of curly braces since CSS in React is key-value pairs. e.g.:
```js
<h1 style={{color: "red"}}>haha</h1>
```
4. Components should be like this (Note that component name **MUST** start with an upper case letter):
```js
class ComponentName extends React.Component {
  constructor(props) {
    super(props);   // You MUST do this before doing anything else!
    this.state = {
      // Set state values
    };
  }
  
  // Place event handlers here. They should be arrow functions (https://www.w3schools.com/react/react_events.asp)
  someEvent = (e) => {
    // e is the event. You can use e.target.name and e.target.value
    // You can use this.setState(stateName: newValue);
  }
  
  // You may add the following functions (https://www.w3schools.com/react/react_lifecycle.asp):
  
  // Mounting:
  // getDerivedStateFromProps() - Called before EVERY render()
  // componentDidMount() - Called after render()
  
  // Updating:
  // shouldComponentUpdate() - return false to prevent component update
  // getSnapshotBeforeUpdate(prevProps, prevState) - Allows you to access props and state before the update
  // componentDidUpdate() - Called after render()
  
  // Unmounting: 
  componentWillUnmount() - Called when the component is about to be removed. (I havn't tried this)
  
  // You MUST implement render and return a value!
  render() {
    return something;
  }
}
```
5. To change the HTML page, check out the public folder.
6. To create a react app: `npx create-react-app myfirstreact` (https://www.w3schools.com/react/react_getstarted.asp)
7. To run the app: `npm start`
8. Sometimes `npm start` would fail and give you a bunch of ~~bullshit~~ errors. During my experiment, all errors like this can be resolved by taking the following steps (From https://stackoverflow.com/questions/42308879/npm-err-code-elifecycle):
```text
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```
9. To import CSS / Sass: Simply `import styles from './path-to-the-file'`. Note that: No file extension needed; add `.module` to use CSS modules (https://www.w3schools.com/react/react_css.asp). e.g.:
```js
import styles from './mystyle.module.scss'

...

ReactDom.render(
  <div className={styles.yourclassname}>lala</div>,
  document.getElementById('lala')
);
```
10. You can only render one element at a time. So `return <h1>lala</h1><h2>lulu</h2>` is not accepted.
11. Event names in JSX are written in camelCase syntax (https://www.w3schools.com/react/react_events.asp). e.g.:
```
return <textarea onChange={this.updateTitle} value={this.state.content}></textarea>;   // Correct
return <textarea onchange={this.updateTitle} value={this.state.content}></textarea>;   // Wrong
```
