import ButtonLink from '../ButtonLink'

const DepartmentView = ({department}) => {
    return (
        <>
            <div>Department View</div>
            <ButtonLink link={`/department/edit/${department.id}`} value={'Edit department'} />
        </>
    )
}

export default DepartmentView