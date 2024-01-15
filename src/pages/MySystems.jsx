import './MySystems.css'
import React, {useState, useEffect} from "react"
import truncateString from "../helpers/truncateString"
import getUsersSystems from "../helpers/getUsersSystems.js"
import {useNavigate, useParams} from "react-router-dom";

function MySystems() {

    const [systems, setSystems] = useState([])
    const [error, setError] = useState(null)
    const { username } = useParams()

    const navigate = useNavigate()

    useEffect(() => {
        const fetchSystems = async () => {
            const systems = await getUsersSystems(username)
            console.log(systems)
            if (!systems.length) {
                setError('No systems data returned')
            } else {
                setSystems(systems)
            }
        }

        void fetchSystems()
    }, [])

    if (error) {
        return <div>Error: {error}</div>
    }

    return (<div className="my-systems">
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
            {systems.map((system, index) => (
                <tr key={index}>
                    <td>
                        <span className="system-name" onClick={() => navigate(`/user-profile/${username}/system/${system.gameSystemID}`)}>
                        {truncateString(system.gameSystemName)}
                        </span>
                    </td>
                    <td>{truncateString(system.gameSystemBrand)}</td>
                    <td>{truncateString(system.gameSystemYearOfRelease)}</td>
                    <td>{truncateString(system.isReadyToPlay ? 'Yes' : 'No')}</td>
                </tr>))}
            </tbody>
        </table>
    </div>)
}

export default MySystems