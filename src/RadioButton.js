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
      <div className="radio-button">
        <label className="radio-button" htmlFor={this.props.id}>
          {this.props.name}
        </label>
        <input
          id={this.props.id}
          type="radio"
          value={this.props.value}
          onChange={this.handleChange.bind(this, this.props.id)}
          checked={this.props.selected} />
      </div>
    )
  }
}
