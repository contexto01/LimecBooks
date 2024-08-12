import { useNavigate } from 'react-router-dom'

function ReturnButton() {
  const navigate = useNavigate()
  const HomePage = () => {
    navigate('/')
  }
  return (
    <button className="w-1/4 mx-auto mb-5" onClick={HomePage}>
      ⬅️ Volver
    </button>
  )
}

export default ReturnButton
