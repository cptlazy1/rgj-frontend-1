import './MySystems.css'
import React, {useState, useEffect} from "react"
import truncateString from "../helpers/truncateString"
import getUsersSystems from "../helpers/getUsersSystems.js"
import {useNavigate, useParams} from "react-router-dom";
import Button from "../components/Button.jsx";

function MySystems() {

    const [systems, setSystems] = useState([])
    const [error, setError] = useState(null)
    const {username} = useParams()
    const [page, setPage] = useState(0)
    const [rowsPerPage] = useState(15)
    const navigate = useNavigate()

    useEffect(() => {
        const fetchSystems = async () => {
            try {
                const systems = await getUsersSystems(username)
                setSystems(systems)
            } catch (error) {
                setError('An error occurred while fetching the systems: ' + error.message)
            }
        }

        void fetchSystems()
    }, [username])

    if (error) {
        return <div>Error: {error}</div>
    }

    const handleChangePage = (newPage) => {
        if (newPage < 0 || newPage * rowsPerPage >= systems.length) {
            return;
        }
        setPage(newPage);
    }

    if (error) {
        return <div>Error: {error}</div>
    }

    return (<div className="my-systems">
        <h1>My Systems</h1>
        <div className="my-systems-buttons">
            <Button text="Add System" onClick={() => navigate(`/user-profile/${username}/add-system`)}>Add
                System</Button>
            <Button text="Profile" onClick={() => navigate(`/user-profile/${username}`)}>Profile</Button>
        </div>
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

            {systems.length > 0 ? (
                systems.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((system, index) => (
                    <tr key={index}>
                        <td>
                            <span className="system-name"
                                  onClick={() => navigate(`/user-profile/${username}/system/${system.gameSystemID}`)}>
                            {truncateString(system.gameSystemName)}
                            </span>
                        </td>
                        <td>{truncateString(system.gameSystemBrand)}</td>
                        <td>{truncateString(system.gameSystemYearOfRelease)}</td>
                        <td>{truncateString(system.isReadyToPlay ? 'Yes' : 'No')}</td>
                    </tr>))) : (
                <tr>
                    <td colSpan={4}>No systems found</td>
                </tr>
            )}
            </tbody>
        </table>
        <div className="my-systems-buttons">
            <Button text="previous" onClick={() => handleChangePage(page - 1)}>Previous</Button>
            <label className="my-systems-page-number">Page {page + 1}</label>
            <Button text="next" onClick={() => handleChangePage(page + 1)}
                    disabled={(page + 1) * rowsPerPage >= systems.length}/>

        </div>


    </div>)
}

export default MySystems