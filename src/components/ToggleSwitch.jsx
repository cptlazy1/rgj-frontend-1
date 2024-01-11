import './ToggleSwitch.css'
import PropTypes from "prop-types";

function ToggleSwitch({isOn, handleToggle}) {
    return (
        <div className="toggle-switch-container">
            <label className="switch-label">
                <input type="checkbox" checked={isOn} onChange={(e) => handleToggle(e.target.checked)}/>
                <span className="slider round"></span>
            </label>
        </div>
    )
}

ToggleSwitch.propTypes = {
    isOn: PropTypes.bool.isRequired,
    handleToggle: PropTypes.func.isRequired
}

export default ToggleSwitch