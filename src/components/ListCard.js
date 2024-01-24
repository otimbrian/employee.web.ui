import { FcDeleteDatabase } from "react-icons/fc";
import { AiFillDelete } from "react-icons/ai";

const ListCard = () => {
    return (
        <div>
            <ul id="department-list">
                <li>Department one <button><FcDeleteDatabase /> </button></li>
                <li>Department one <button><AiFillDelete /></button></li>
                <li>Department one <button><AiFillDelete /></button></li>
                <li>Department one <button><AiFillDelete /></button></li>
            </ul>
        </div>
    )
}

export default ListCard