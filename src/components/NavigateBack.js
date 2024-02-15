import { useNavigate } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'

const NavigateBack = () => {
    let navigate = useNavigate()

    return (
        <button id='navigate-back' onClick={() => navigate(-1)}>
            <FaArrowLeft /> Back
        </button>
    )
}

export default NavigateBack
