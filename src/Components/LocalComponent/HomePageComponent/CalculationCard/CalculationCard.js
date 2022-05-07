import React, { Component } from "react";
import pageCard from "../../../../Resources/HomePage/PageCard";
import CalcCard from "../../../GlobalComponent/CalcCard/CalcCard";
import "./CalculationCard.css";

class CalculationCard extends Component {
  state = {
    searchInput: "",
  };

  onChangeSearchInput = (event) => {
    this.setState({ searchInput: event.target.value });
  };

  render() {
    const { searchInput } = this.state;

    const searchResults = pageCard.filter((data) =>
      data.title.toLowerCase().includes(searchInput.toLowerCase())
    );

    return (
      <div className="app-container">
        <div className="calculation-search-container">
          <h1 className="heading">Calculations :</h1>
          <div className="search-input-container">
            <input
              type="search"
              className="search-input"
              placeholder="Search by Title"
              value={searchInput}
              onChange={this.onChangeSearchInput}
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
              className="search-icon"
            />
          </div>
          <ul className="calculation-list">
            {searchResults.map((each) => {
              return <CalcCard title={each.title} pageLink={each.pageLink} />;
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default CalculationCard;
