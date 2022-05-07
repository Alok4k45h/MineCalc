import React, { Component } from "react";
import "./PowderFactorCalc.css";

// PowderFactorCalc Component
class PowderFactorCalc extends Component {
  constructor() {
    super();

      this.state = {
          burden: 0,
          spacing: 0,
          height: 0,
          stemming: 0,
          diameter: 0,
          subdrill: 0,
          explosiveDensity: 0,

      };


      this.burdenChangeHandler = this.burdenChangeHandler.bind(this);
      this.spacingChangeHandler = this.spacingChangeHandler.bind(this);
      this.heightChangeHandler = this.heightChangeHandler.bind(this);
      this.stemmingChangeHandler = this.stemmingChangeHandler.bind(this);
      this.diameterChangeHandler = this.diameterChangeHandler.bind(this);
      this.subdrillChangeHandler = this.subdrillChangeHandler.bind(this);
      this.explosiveDensityChangeHandler =
          this.explosiveDensityChangeHandler.bind(this);
      this.calculateHandler = this.calculateHandler.bind(this);
  }

    burdenChangeHandler(event) {
        this.setState({ burden: event.target.value });
    }

    spacingChangeHandler(event) {
        this.setState({ spacing: event.target.value });
    }

    heightChangeHandler(event) {
        this.setState({ height: event.target.value });
    }

    stemmingChangeHandler(event) {
        this.setState({ stemming: event.target.value });
    }

    diameterChangeHandler(event) {
        this.setState({ diameter: event.target.value });
    }

    subdrillChangeHandler(event) {
        this.setState({ subdrill: event.target.value });
    }

    explosiveDensityChangeHandler(event) {
        this.setState({ explosiveDensity: event.target.value });
    }

    calculateHandler() {
        const {
            burden,
            spacing,
            height,
            stemming,
            diameter,
            subdrill,
            explosiveDensity,
        } = this.state;
        const x = (parseInt(height) + parseInt(subdrill)) - parseInt(stemming);
        const result =

            (3.14 * diameter * diameter * (x) * explosiveDensity) / (burden * spacing * height * 1000 * 1000 * 4);

        this.setState({ output: result });
    }

  render() {
    return (
      <div>
        <div className="page-section pb-5">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-7">
                <img
                  src="./powderFactor.jpg"
                  className="page-section-image"
                  alt=""
                />
              </div>

              <div className="col-12 col-md-5 d-flex flex-column justify-content-center">
                <div className="col-12">
                  <h1 className="mb-3 page-section-heading">
                    Powder Factor Calculation
                  </h1>
                </div>
                <div className="col-12">
                  <h3 className="page-section-sub-heading">Input</h3>
                </div>
                <div className="col-12 mb-3">
                  <label>
                    Burden(m):
                    <input
                      className="ml-3"
                      type="number"
                      placeholder="Enter the Burden Value"
                      onChange={this.burdenChangeHandler}
                    />
                  </label>
                </div>

                <div className="col-12 mb-3">
                  <label>
                    Spacing(m):
                    <input
                      className="ml-3"
                      type="number"
                      placeholder="Enter the Spacing Value"
                      onChange={this.spacingChangeHandler}
                    />
                  </label>
                </div>

                <div className="col-12 mb-3">
                  <label>
                    Height(m):
                    <input
                      className="ml-3"
                      type="number"
                      placeholder="Enter the Height Value"
                      onChange={this.heightChangeHandler}
                    />
                  </label>
                </div>

                <div className="col-12 mb-3">
                  <label>
                    Stemming(m):
                    <input
                      className="ml-3"
                      type="number"
                      placeholder="Enter the Rock Density Value"
                      onChange={this.stemmingChangeHandler}
                    />
                  </label>
                </div>

                <div className="col-12 mb-3">
                  <label>
                    Diameter(mm):
                    <input
                      className="ml-3"
                      type="number"
                      placeholder="Enter the Diameter Value"
                      onChange={this.diameterChangeHandler}
                    />
                  </label>
                </div>

                <div className="col-12 mb-3">
                  <label>
                    Subdrill(m):
                    <input
                      className="ml-3"
                      type="number"
                      placeholder="Enter the Subdrill Value"
                      onChange={this.subdrillChangeHandler}
                    />
                  </label>
                </div>

                <div className="col-12 mb-3">
                  <label>
                    Density of Explosive(kg/m3):
                    <input
                      className="ml-3"
                      type="number"
                      placeholder="Enter the Explosive Density Value"
                      onChange={this.explosiveDensityChangeHandler}
                    />
                  </label>
                </div>
                <div className="col-12 mb-5">
                  <div
                    className="btn btn-outline-primary"
                    onClick={this.calculateHandler}
                  >
                    Calculate
                  </div>
                </div>

                <div className="col-12">
                  <h3 className="page-section-sub-heading">Output</h3>
                </div>
                <div className="col-12">
                  <p>Powder Factor(kg/m3) : {this.state.output}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PowderFactorCalc;
