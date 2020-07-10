import React from "react";
import Google from "./googleaddpick";

function insured_info({ match }) {
  console.log(match.params.EffectiveDate);
  return (
    <div class="w3-panel w3-ios-yellow">
      <center>
        <h1>SOLARTIS INSURANCE COMPANY</h1>
        <h2>
          <center>SECTION I-TELL US ABOUT YOU</center>
        </h2>
        <form action="/detail" method="get">
          <table>
            <tr>
              <th>QUERIES</th>
              <th>CLIENT DETAILS</th>
            </tr>
            <tr>
              <td>
                <label for="firstname">
                  First Name<span>*</span>
                </label>
              </td>
              <td>
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  placeholder="First name"
                  required
                />
                <br />
              </td>
            </tr>
            <tr>
              <td>
                <label for="lastname">
                  Last Name<span>*</span>
                </label>
              </td>
              <td>
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  placeholder="Last name"
                  required
                />
                <br />
              </td>
            </tr>
            <tr>
              <td>
                <label for="email">Email</label>
              </td>
              <td>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="mail-id"
                />
                <br />
              </td>
            </tr>
            <tr>
              <td>
                <label for="phonenum">Telephone Number:</label>
              </td>
              <td>
                <input
                  id="phonenum"
                  type="tel"
                  pattern="^\d{4}\d{2}\d{4}$"
                  placeholder=" Tel-no"
                ></input>
              </td>
              <br />
            </tr>
          </table>
          <hr></hr>
          <h2>
            <center>SECTION II-Where do you Live?</center>
          </h2>

          <table>
            <tr>
              <th>QUEREIS</th>
              <th>LOCATION</th>
            </tr>
            <tr>
              <td>
                <label for="streetno">Street Number</label>
              </td>
              <td>
                <input
                  type="number"
                  name="no"
                  id="no"
                  placeholder="Street Number"
                />
              </td>
            </tr>
            <tr>
              <td>
                <label for="streetname">Street Name</label>
              </td>
              <td>
                <input
                  type="text"
                  name="strname"
                  id="strname"
                  placeholder="Street Name"
                />
              </td>
            </tr>
          </table>
          <Google />
          <br />
          <button type="submit" id="button">
            SUBMIT
          </button>
          <br />
          <br />
        </form>
      </center>
    </div>
  );
}
export default insured_info;
