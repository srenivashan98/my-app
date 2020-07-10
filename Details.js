import React from "react";
import {withRouter} from "react-router-dom";

function Details() {
  return (
    <div class="w3-panel w3-ios-yellow">
      <center>
        
        <h1>SOLARTIS INSURANCE COMPANY</h1>
        <h2>
          <center>COVERAGE INFORMATION</center>
        </h2>
      </center>
      <center>
      <form method="post">
            <table>
          <tr>
            <th>QUEREIS</th>
            <th>Plan Type</th>
          </tr>
          <tr colspan="2">
            <h3>PLAN </h3>
          </tr>
          <tr>
            <td>
              <label for="details-0">
                Select the plan you preferred<span>*</span>
              </label>
            </td>
            <td>
              <select name="details-0" id="dd" required>
                <option value="" id="dd" placeholder="-select-"></option>
                <option value="STANDARD">STANDARD</option>
                <option value="PREFERRED">PREFERRED</option>
              </select>
            </td>
          </tr>
          <tr colspan="2">
            <h3>Personal Property Coverage</h3>
          </tr>
          <tr>
            <td>
              <label
                for="details-1
"
              >
                How much Personal Property Coverage do you need?<span>*</span>
              </label>
            </td>
            <td>
              <input
                type="number"
                name="details-1"
                id="details-1"
                min="50000" max="200000"
                required
                placeholder="(50,000-200,000)"
              />
            </td>
          </tr>
          <tr>
            <td>
              <label for="details-2">
                What is the construction of the Building you live in?
                <span>*</span>
              </label>
            </td>
            <td>
              <select
                name="details-2
"
                id="dd
"
              >
                <option value="" id="dd" placeholder="-select-" required></option>
                <option value="01">Frame</option>
                <option value="02">Brick</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>
              <label for="details-3">
                What deductible would you like for your Personal Property
                Coverage? <span>*</span>
              </label>
            </td>
            <td>
              <select
                name="details-3

"
                id="dd
"
              >
                <option value="" id="dd" placeholder="-select-" required></option>
                <option value="1">100</option>
                <option value="2">250</option>
                <option value="3">500</option>
              </select>
            </td>
          </tr>
          <tr colspan="2">
            <h3>Liability Coverage </h3>
          </tr>
          <tr>
            <td>
              <label
                for="details-4
"
              >
                How much Liability coverage do you want? <span>*</span>
              </label>
            </td>
            <td>
              <select
                name="details-4 
 

 "
                id="dd  
  
 
 "
              >
                <option value="" id="dd" placeholder="-select-" required></option>
                <option value="1">100,000</option>
                <option value="2">300,000</option>
                <option value="3">500,000</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>
              <label
                for="details-5 

"
              >
                What is your current age? <span>*</span>
              </label>
            </td>
            <td>
              <input
                type="number"
                name="details-5"
                id="details-5"
                min='18'
                max='70'
                required
                placeholder="Enter age"
                />
            </td>
          </tr>
            </table>
            <br/>
            <button id="rate" type="rate">
          RATE
        </button><br/>
         <br />
        <button type="VIEW JSON" id="button">
          VIEW JSON
        </button> <br /><br/>
        </form>
      </center>
    </div>
  );
}
export default withRouter(Details);
