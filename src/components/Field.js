import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

class Field extends Component {

  state = {
    partNumber: '',
    partDesc: '',
    partTotal: '',
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  reset = () => {
    this.myForm.reset();
  }

  publish = () => {
    console.log(this.state.partDesc, this.state.partNumber, this.state.partTotal);
    window.print();
  }

  render() {
    const { partNumber, partDesc, partTotal } = this.state;
    const enabled = partNumber.length && partTotal.length;

    return (
      <form ref={el => this.myForm = el}>
        <Input
          name="partNumber"
          type="text"
          placeholder="Enter Part Number"
          onChange={this.handleInputChange}
          value={partNumber}
        />
        <Input
          name="partDesc"
          type="text"
          placeholder="Enter Part Desc"
          onChange={this.handleInputChange}
          value={partDesc}
        />
        <Input
          name="partTotal"
          type="text"
          placeholder="Enter Number of Parts"
          onChange={this.handleInputChange}
          value={partTotal}
        />
        <PrintButton disabled={!enabled} onClick={this.publish}>Print</PrintButton>
        <ResetButton type="button" onClick={this.reset}>Reset</ResetButton>
      </form>
    );
  }
}

Field.propTypes = {};

const Input = styled.input`
  box-sizing: border-box;
  display: block;
  font-size: 16px;
  color: #777;
  background: #f6f6f6;
  padding: 10px 20px;
  margin: 0 0 15px;
  border-radius: 50px;
  border: 1px solid transparent;
`;

const PrintButton = styled.button`
  display: block;
  color: #fff;
  font-size: 16px;
  margin: auto;
  padding: 10px 25px;
	background: #5892fc;
  border-radius: 3px;
  border: 0;

  &:hover {
    cursor: pointer;
  }

  &:disabled {
    background: #d7e0f0;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    width: 100%;
  }

  @media print {
    display: none;
  }
`;

const ResetButton = styled(PrintButton)`
  background: #e91818;
  margin-top: 20px;
`;

export default Field;
