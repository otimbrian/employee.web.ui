// import { FcDeleteDatabase } from "react-icons/fc";
import { AiFillDelete } from 'react-icons/ai'

const ListCard = ({ employee, handleDelete }) => {
    return (
        <li>
            {employee.name}{' '}
            <button onClick={handleDelete}>
                <AiFillDelete />
            </button>
        </li>
    )
}

export default ListCard
