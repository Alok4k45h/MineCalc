import React, { Component } from "react";

class RqdCalc extends Component {
  constructor() {
    super();

        this.state = {
            SampleLength: 0,
            corelength: 0
        };

        this.SampleLengthChangeHandler = this.SampleLengthChangeHandler.bind(this);
        this.corelengthChangeHandler = this.corelengthChangeHandler.bind(this);
        this.calculateHandler = this.calculateHandler.bind(this);
    }

    SampleLengthChangeHandler(event) {
        this.setState({ SampleLength: event.target.value });
    }

    corelengthChangeHandler(event) {
        this.setState({ corelength: event.target.value });
    }

    calculateHandler() {
        console.log(this.state);
        const { SampleLength, corelength } = this.state;
        const myArray = SampleLength.split(",");
        var numerator = 0;

        for (let i = 0; i < myArray.length; i++) {
            var temp = parseInt(myArray[i]);
            if (temp > 10) {
                numerator += temp;
            }
        }
        const result = numerator / corelength * 100;
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
                  src="./rqd.jpg"
                  className="page-section-image"
                  alt=""
                />
              </div>

              <div className="col-12 col-md-5 d-flex flex-column justify-content-center">
                <div className="col-12">
                  <h1 className="mb-3 page-section-heading">
                    Rock Quality Designation
                  </h1>
                </div>
                <div className="col-12">
                  <h3 className="page-section-sub-heading">Input</h3>
                </div>
                <div className="col-12 mb-3">
                  <label>
                                    samplelength(cm):
                    <input
                      className="ml-3"
                                        type="string"
                                        placeholder="comma separated length of sound pieces"
                                        onChange={this.SampleLengthChangeHandler}
                                    />
                  </label>
                </div>

                <div className="col-12 mb-3">
                  <label>
                                    corelength(cm):
                    <input
                      className="ml-3"
                                        type="number"
                                        placeholder="Enter corelength"
                                        onChange={this.corelengthChangeHandler}
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
                  <p>RQD(%) : {this.state.output}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RqdCalc;
