
const SelectForm = () => {
    return (
        <div className="form-content">
            <form action="http://www.example.com/profile.php">
                By Departmet:
                <select name="devices">
                    <option value="ipod">iPod</option>
                    <option value="radio">Radio</option>
                    <option value="computer">Computer</option>
                </select>
            </form>
            <form action="http://www.example.org/search.php">
                By Name:
                <input type="text" name="search"
                    placeholder="Employee Name" />
                {/* <input type="submit" value="Search" /> */}
            </form>
        </div>
    )
}

export default SelectForm