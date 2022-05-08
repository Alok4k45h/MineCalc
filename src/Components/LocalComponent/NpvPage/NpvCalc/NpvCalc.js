import React, { Component } from "react";

class NpvCalc extends Component {
  constructor() {
    super();

    this.state = {
      amountInvested: 0,
      numberOfYear: 0,
      rate: 0,
      amountReturnPerYear: 0,
    };

    this.amountInvestedChangeHandler =
      this.amountInvestedChangeHandler.bind(this);
    this.numberOfYearChangeHandler = this.numberOfYearChangeHandler.bind(this);
    this.rateChangeHandler = this.rateChangeHandler.bind(this);
    this.amountReturnPerYearChangeHandler =
      this.amountReturnPerYearChangeHandler.bind(this);
    this.calculateHandler = this.calculateHandler.bind(this);
  }

  amountInvestedChangeHandler(event) {
    this.setState({ amountInvested: event.target.value });
  }

  numberOfYearChangeHandler(event) {
    this.setState({ numberOfYear: event.target.value });
  }

  rateChangeHandler(event) {
    this.setState({ rate: event.target.value });
  }
  amountReturnPerYearChangeHandler(event) {
    this.setState({ amountReturnPerYear: event.target.value });
  }

  calculateHandler() {
    const { amountInvested, numberOfYear, rate, amountReturnPerYear } =
      this.state;
    var ans = 0;
    var tail = 0;
    var head = 0;
    for (let i = 1; i <= numberOfYear; i++) {
      tail = (1 + rate / 100) ** i;
      head = amountReturnPerYear / tail;
      ans = ans + head;
      // console.log(amountReturnPerYear);
    }

    const result = parseInt(ans) - parseInt(amountInvested);

    this.setState({ output: result });
  }

  render() {
    return (
      <div>
        <div className="page-section pb-5">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-7">
                <img src="./npv.jpg" className="page-section-image" alt="" />
              </div>

              <div className="col-12 col-md-5 d-flex flex-column justify-content-center">
                <div className="col-12">
                  <h1 className="mb-3 page-section-heading">
                    Net Present Value
                  </h1>
                </div>
                <div className="col-12">
                  <h3 className="page-section-sub-heading">Input</h3>
                </div>
                <div className="col-12 mb-3">
                  <label>
                    amountInvested(RS):
                    <input
                      className="ml-3"
                      type="number"
                      placeholder="Enter the amount invested in project"
                      onChange={this.amountInvestedChangeHandler}
                    />
                  </label>
                </div>

                <div className="col-12 mb-3">
                  <label>
                    numberOfYear:
                    <input
                      className="ml-3"
                      type="number"
                      placeholder="Enter the no of year"
                      onChange={this.numberOfYearChangeHandler}
                    />
                  </label>
                </div>

                <div className="col-12 mb-3">
                  <label>
                    rate(%):
                    <input
                      className="ml-3"
                      type="number"
                      placeholder="Enter the rate Value"
                      onChange={this.rateChangeHandler}
                    />
                  </label>
                </div>

                <div className="col-12 mb-3">
                  <label>
                    amountReturnPerYear(RS):
                    <input
                      className="ml-3"
                      type="number"
                      placeholder="Enter the amount of return per year."
                      onChange={this.amountReturnPerYearChangeHandler}
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
                  <p>Net Present Value : {this.state.output}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NpvCalc;
