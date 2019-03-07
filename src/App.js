import React, { Component } from 'react';
import './App.css';
import RadioDropdown from "./RadioDropdown"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      recordLabelCategories: {
        name: "Record Labels",
        options: [
          {
            id: "warner",
            value: "Warner",
            selected: false,
          },
          {
            id: "sony",
            value: "Sony",
            selected: false,
          },
          {
            id: "universal",
            value: "Universal",
            selected: false,
          },
          {
            id: "major_independent",
            value: "Major Independent",
            selected: false,
          },
          {
            id: "independent",
            value: "Independent",
            selected: false,
          }
        ]
      },
      artistSizeCategories: {
        name: "Artist Size",
        options: [
          {
            id: "enormous",
            value: "Enormous",
            selected: false,
          },
          {
            id: "large",
            value: "Large",
            selected: false,
          },
          {
            id: "moderate",
            value: "Moderate",
            selected: false,
          },
          {
            id: "small",
            value: "Small",
            selected: false,
          },
          {
            id: "tiny",
            value: "Tiny",
            selected: false,
          },
        ]
      },
      releaseDateRange: {
        name: "Release Date",
        options: [
          {
            id: 14,
            value: "Within Last 14 Days",
            selected: false,
          },
          {
            id: 30,
            value: "Within Last 30 Days",
            selected: false,
          },
          {
            id: 60,
            value: "Within Last 60 Days",
            selected: false,
          },
          {
            id: 180,
            value: "Within Last 180 Days",
            selected: false,
          }
        ]
      }
    }
  }

  updateResults() {
    // This is where the API call would go, taking all the selections.
    console.log(this.state.recordLabelCategories)
    console.log(this.state.artistSizeCategories)
    console.log(this.state.releaseDateRange)
  }

  render() {
    return (
      <div style={{margin: "0 auto"}}>
        <div className="radio-dropdowns-wrapper">
          <RadioDropdown
            name="Record Label"
            options={this.state.recordLabelCategories.options}
          />

          <RadioDropdown
            name="Artist Size"
            options={this.state.artistSizeCategories.options}
          />

          <RadioDropdown
            name="Release Date"
            options={this.state.releaseDateRange.options}
          />
        </div>

        <div className="update-results-wrapper" onClick={this.updateResults.bind(this)}>
          Update Results
        </div>
      </div>
    )
  }
}

export default App;
