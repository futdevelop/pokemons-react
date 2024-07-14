import { useDispatch, useSelector } from 'react-redux'
import { setModalClosed } from '../../store/apiSlice'
import { apiSlice } from '../../store/selectors'
import ModalComponent from '../../components/ModalComponent'

const ModalContainer = () => {
  const { isOpenModal, statusLoading, pokemon } = useSelector(apiSlice)
  const dispatch = useDispatch()

  const handleCloseModal = function () {
    dispatch(setModalClosed())
  }

  return (
    <ModalComponent
      handleCloseModal={handleCloseModal}
      isOpenModal={isOpenModal}
      statusLoading={statusLoading}
      pokemon={pokemon}
    />
  )
}

export default ModalContainer
