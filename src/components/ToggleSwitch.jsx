import './ToggleSwitch.css'

// eslint-disable-next-line react/prop-types
function ToggleSwitch({isOn, handleToggle}) {
    return (
        <div className="toggle-switch-container">
            <label className="switch-label">
                <input type="checkbox" checked={isOn} onChange={handleToggle}/>
                <span className="slider round"></span>
            </label>
        </div>
    )
}

export default ToggleSwitch