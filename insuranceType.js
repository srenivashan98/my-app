import React from "react";
function insuranceType() {
  
  return (
        <form method="get" action="/info">
          <div class="w3-panel w3-ios-yellow">
      <h1>
        <center>SOLARTIS INSURANCE COMPANY</center>
      </h1>
      <h2>
        <center>DEMAND YOUR POLICY TYPE</center>
      </h2>
      <center>
          <table>
            <tr>
              <th>QUERIES</th>
              <th>CLIENT DETAIL SELECTION</th>
            </tr>
            <tr>
              <td>
                <label for="type">
                  What Type of Insurance do you need?{" "}
                </label>
              </td>
              <td>
                <select name="type" id="dd" required>
                  <option value="" id="dd"></option>
                  <option value="1">Renters Insurance</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>
                <label for="date">
                  When would you like the policy to start?<span>*</span>
                </label>
              </td>
              <td>
                <input type="date" name="EffectiveDate" id="date" required></input>
              </td>
            </tr>
          </table>
          <br />
          <button type="submit" id="button">
            SUBMIT
          </button><br/>
          </center>
    </div></form>
    
  );
}
export default insuranceType;
