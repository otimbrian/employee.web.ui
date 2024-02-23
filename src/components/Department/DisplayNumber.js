export const DisplayNumber = ({ department }) => {
  return <>{department.employees.length > 1 ? <>Employees</> : <>Employee</>}</>
}
