import './MySystems.css'
import truncateString from "../helpers/truncateString";

function MySystems() {
  return (
      <div className="my-systems">
          <h1>My Systems</h1>
          <table>
              <thead>
              <tr>
                  <th>System</th>
                  <th>Brand</th>
                  <th>Year</th>
                  <th>Ready to play?</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                  <td>{truncateString('Sega MegaDrive')}</td>
                  <td>Sega</td>
                  <td>1987</td>
                  <td>Yes</td>
              </tr>
              <tr>
                  <td>Neo Geo</td>
                  <td>SNK</td>
                  <td>1990</td>
                  <td>Yes</td>
              </tr>
              <tr>
                  <td>Super Nintendo</td>
                  <td>Nintendo</td>
                  <td>1990</td>
                  <td>Yes</td>
              </tr>

              </tbody>
          </table>
      </div>
  )
}

export default MySystems