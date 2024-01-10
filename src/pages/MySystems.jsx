import './MySystems.css'
import React, {useState, useEffect} from "react"
import truncateString from "../helpers/truncateString"
import getUsersSystems from "../helpers/getUsersSystems.js"

function MySystems() {

    const [systems, setSystems] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchSystems = async () => {
            try {
                const systems = await getUsersSystems()
                if (!systems.length) {
                    throw new Error('No systems data returned');
                }
                setSystems(systems)
            } catch (error) {
                setError(error.message)
            }
        }

        void fetchSystems()
    }, [])

    if (error) {
        return <div>Error: {error}</div>
    }

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
                {systems.map((system, index) => (
                    <tr key={index}>
                        <td>{truncateString(system.gameSystemName)}</td>
                        <td>{truncateString(system.gameSystemBrand)}</td>
                        <td>{truncateString(system.gameSystemYearOfRelease)}</td>
                        <td>{truncateString(system.isReadyToPlay ? 'Yes' : 'No')}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default MySystems