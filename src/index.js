import React from 'react';
import ReactDom from 'react-dom';
import styles from './mystyle.module.scss'

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      studentid: '',
      year: ''
    };
  }

  updateForm = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  render() {
    const displayInfo = (
      this.state.studentid.length * this.state.year.length ?
        <h1>ID: {this.state.studentid}; Year: {this.state.year}</h1> :
        <h1>Fill Info</h1>
    );

    return (
      <form>
        {displayInfo}
        <div>Student ID: <input type="text" name="studentid" onChange={this.updateForm}></input></div>
        <div>Year: <input type="text" name="year" onChange={this.updateForm}></input></div>
      </form>
    );
  }
}

class InputBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: props.defaultValue || ''
    };
  }

  updateTitle = (e) => {
    this.setState({content: e.target.value});
  }

  render() {
    return (
      <div>
        <h1>{'Content: ' + this.state.content}</h1>
        <textarea onChange={this.updateTitle} value={this.state.content}></textarea>
      </div>
    );
  }
}

class GenderSelection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: props.defaultValue || ''
    };
  }

  updateTitle = (e) => {
    this.setState({selected: e.target.value});
  }

  render() {
    return (
      <div>
        <h1>{'Content: ' + this.state.selected}</h1>
        <select onChange={this.updateTitle} value={this.state.selected}>
          <option value="">(Please select your gender)</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>
    );
  }
}

ReactDom.render(
  <div className={styles.bluebg}>
    <MyForm/>
    <InputBox />
    <GenderSelection />
  </div>,
  document.getElementById('lala')
);