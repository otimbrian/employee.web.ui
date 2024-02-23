import { useSelector } from 'react-redux'

const SelectForm = ({ setFilterByDepartment, setFilterByName }) => {
  const departments = useSelector(state => state.departments.department)
  return (
    <div className='form-content'>
      <form>
        By Departmet:
        <select
          name='department'
          onChange={e => setFilterByDepartment(e)}
          defaultValue='All Departments'
        >
          <option value='All Departments'>All Departments</option>
          {departments.map(department => (
            <option value={department.id} key={department.id}>
              {department.name}
            </option>
          ))}
        </select>
      </form>
      <form>
        By Name:
        <input
          type='text'
          name='search'
          placeholder='Employee Name'
          onChange={e => setFilterByName(e)}
        />
      </form>
    </div>
  )
}

export default SelectForm
