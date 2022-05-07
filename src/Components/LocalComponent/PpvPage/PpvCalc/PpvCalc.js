import React, { Component } from "react";
import "./PpvCalc.css";

class PpvCalc extends Component {
    constructor() {
        super();

        this.state = {
            k: 0,
            d: 0,
            w: 0,
            a: 0,
            r: 0
        };

        this.kChangeHandler = this.kChangeHandler.bind(this);
        this.dChangeHandler = this.dChangeHandler.bind(this);
        this.wChangeHandler = this.wChangeHandler.bind(this);
        this.aChangeHandler = this.aChangeHandler.bind(this);
        this.rChangeHandler = this.rChangeHandler.bind(this);
        this.calculateHandler = this.calculateHandler.bind(this);
    }

    kChangeHandler(event) {
        this.setState({ k: event.target.value });
    }

    dChangeHandler(event) {
        this.setState({ d: event.target.value });
    }

    wChangeHandler(event) {
        this.setState({ w: event.target.value });
    }

    aChangeHandler(event) {
        this.setState({ a: event.target.value });
    }

    rChangeHandler(event) {
        this.setState({ r: event.target.value });
    }

    calculateHandler() {
        const { k, d, w, a, r } = this.state;
        const result = k * (d / w ** a) ** -r;
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
                  src="./Ppv.png"
                  className="page-section-image"
                  alt=""
                />
              </div>

              <div className="col-12 col-md-5 d-flex flex-column justify-content-center">
                <div className="col-12">
                  <h1 className="mb-3 page-section-heading">
                    Peak Particle Velocity
                  </h1>
                </div>
                <div className="col-12">
                  <h3 className="page-section-sub-heading">Input</h3>
                </div>
                <div className="col-12 mb-3">
                  <label>
                   k:
                    <input
                      className="ml-3"
                                        type="number"
                                        placeholder="Enter the K Value"
                                        onChange={this.kChangeHandler}
                    />
                  </label>
                </div>

                <div className="col-12 mb-3">
                  <label>
                    d(m):
                    <input
                      className="ml-3"
                                        type="number"
                                        placeholder="Enter the d Value"
                                        onChange={this.dChangeHandler}
                    />
                  </label>
                </div>

                <div className="col-12 mb-3">
                  <label>
                    w(kg):
                    <input
                      className="ml-3"
                                        type="number"
                                        placeholder="Enter the w Value"
                                        onChange={this.wChangeHandler}
                    />
                  </label>
                </div>

                <div className="col-12 mb-3">
                  <label>
                    a:
                    <input
                      className="ml-3"
                                        type="number"
                                        placeholder="Enter the a Value"
                                        onChange={this.aChangeHandler}
                    />
                  </label>
                </div>

                <div className="col-12 mb-3">
                  <label>
                    r:
                    <input
                      className="ml-3"
                                        type="number"
                                        placeholder="Enter the r Value"
                                        onChange={this.rChangeHandler}
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
                  <p>Peak Particle Velocity(mm/s) : {this.state.output}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default PpvCalc;
