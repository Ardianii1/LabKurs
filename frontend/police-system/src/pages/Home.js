import React, { Component } from "react";

export class Home extends Component {
  render() {
    return (
      <div>
        <h3>This is home page</h3>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Emri</th>
              <th scope="col">Mbiemri</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colSpan="2"></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
