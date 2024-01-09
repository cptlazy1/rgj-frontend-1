function truncateString (str) {
        if (str.length > 40) {
                return str.slice(0, 40) + "..."
        } else {
                return str
        }
}
export default truncateString
