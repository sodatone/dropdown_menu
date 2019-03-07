import React from "react"
import RadioButton from "./RadioButton"

export default class RadioDropdown extends React.Component {
  constructor(props) {
    super(props)
    const options = this.props.options

    this.state = { 
      expanded: true,
      options: options
    }

    this.deselectAll = this.deselectAll.bind(this)
    this.handleRadioButtonChange = this.handleRadioButtonChange.bind(this)
  }

  toggleExpanded() {
    this.setState({ expanded: !this.state.expanded })
  }

  handleRadioButtonChange(id) {
    const options = this.state.options

    for (var i = 0; i < options.length; i++) {
      if (id == options[i].id) {
        options[i].selected = true
      } else {
        options[i].selected = false
      }
    }

    this.setState({ options: options })
  }

  getCurrentSelection() {
    for (var i = 0; i < this.state.options.length; i++) {
      if (this.state.options[i].selected) {
        return this.state.options[i]
      }
    }
  }

  getRadioButtons() {
    return this.state.options.map(option => {
      return <RadioButton
        id={option.id}
        name={option.value}
        value={option.value}
        checkboxName={this.props.checkboxName}
        handleRadioButtonChange={this.handleRadioButtonChange}
        selected={option.selected}
        handleInputChange={this.handleInputChange}
        onInputChange={this.forwardInputChange}
      />
    })
  }

  deselectAll() {
    const options = this.state.options

    for (var i = 0; i < options.length; i++) {
      options[i].selected = false
    }

    this.setState({ options: options })
  }

  render() {
    const currentSelection = this.getCurrentSelection()

    return (
      <div className="radio-dropdown-wrapper">
        <div className="radio-dropdown-header" onClick={this.toggleExpanded.bind(this)}>
          <div className="radio-dropdown-name">
            {this.props.name}{" "}
            <span className='selected-dropdown-option-text'>
              ({(currentSelection || {}).value || 'None'})
            </span>
          </div>
          <i className="fa fa-caret-down" />
        </div>

        {this.state.expanded &&
          <div
            style={{display: this.state.expanded ? 'block' : 'none' }}>
              {this.getRadioButtons()}
              <div className="clear-button" onClick={this.deselectAll}>
                Clear
              </div>
          </div>
        }
      </div>
    );    
  }
}
