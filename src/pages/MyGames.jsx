import './MyGames.css'
import truncateString from "../helpers/truncateString";

function MyGames() {

  return (
      <div className="my-games">
          <h1>My Games</h1>
          <table>
              <thead>
              <tr>
                  <th>Title</th>
                  <th>Publisher</th>
                  <th>System</th>
                  <th>Year</th>
                  <th>Is original</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                  <td>{truncateString('Sonic the Hedgehog')}</td>
                  <td>{truncateString('Sega')}</td>
                  <td>{truncateString('MegaDrive')}</td>
                  <td>{truncateString('1990')}</td>
                  <td>{truncateString('Yes')}</td>
              </tr>
              <tr>
                  <td>{truncateString('Super Mario Bros. 3')}</td>
                  <td>{truncateString('Nintendo')}</td>
                  <td>{truncateString('Nintendo Entertainment System')}</td>
                  <td>{truncateString('1992')}</td>
                  <td>{truncateString('No')}</td>
              </tr>
              <tr>
                  <td>{truncateString('Halo 2')}</td>
                  <td>{truncateString('Microsoft')}</td>
                  <td>{truncateString('Xbox')}</td>
                  <td>{truncateString('2002')}</td>
                  <td>{truncateString('Yes')}</td>
              </tr>

              </tbody>
          </table>
      </div>
  )
}

export default MyGames