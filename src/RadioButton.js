import React from "react"

export default class RadioButton extends React.Component {
  constructor(props) {
    super(props)
  }

  handleChange(id) {
    this.props.handleRadioButtonChange(id)
  }

  render() {
    return (
      <div>
        <label htmlFor={this.props.id}>
          {this.props.name}
          <input
            id={this.props.id}
            type="radio"
            value={this.props.value}
            name={this.props.checkboxName}
            onChange={this.handleChange.bind(this, this.props.id)}
            checked={this.props.selected} />
        </label>
      </div>
    )
  }
}
