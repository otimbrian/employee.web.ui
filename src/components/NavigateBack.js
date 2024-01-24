import { useNavigate } from "react-router-dom"
import { FaArrowLeft } from "react-icons/fa";

const NavigateBack = () => {
    let navigate = useNavigate()

    const navigateToPreviousUrl = () => {
        navigate(-1)
    }
    return (
        <button id="navigate-back" onClick={navigateToPreviousUrl}><FaArrowLeft /> Back</button>
    )
}

export default NavigateBack