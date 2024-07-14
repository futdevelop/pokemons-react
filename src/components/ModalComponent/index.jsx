import { Modal } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress'
import React, { useEffect } from 'react'
import statsImages from '../../images/pokemonStats'
import typesImages from '../../images/pokemonTypes'
import './styles.scss'
import CloseIcon from '@mui/icons-material/Close';

const ModalComponent = ({
  isOpenModal,
  handleCloseModal,
  statusLoading,
  pokemon,
}) => {
  useEffect(() => {
    console.log(pokemon)
  }, [pokemon])

  return (
    <Modal
      open={isOpenModal}
      onClose={handleCloseModal}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <div className='modal'>
        {statusLoading === 'idle' && pokemon && (
          <>
            <div className='modal__closeBtn'>
              <CloseIcon onClick={handleCloseModal} />
            </div>
            <div className='modal__logo'>
              <img src={pokemon.logo} alt='Pokemon logo' />
            </div>
            <p className='modal__name'>{pokemon.name}</p>
            <div className='modal__types'>
              {pokemon.types.map((type, i) => (
                <div key={i} className='modal__type'>
                  <div className='modal__type_logo'>
                    <img src={typesImages[type.name]} alt={type.name} />
                  </div>
                  <p>{type.name}</p>
                </div>
              ))}
            </div>
            <div className='modal__params'>
              <p className='modal__params_title'>Params:</p>
              <p>
                <span>Height: </span> {pokemon.height}
              </p>
              <p>
                <span>Weight: </span> {pokemon.weight}
              </p>
              <p>
                <span>Power: </span> {pokemon.power}
              </p>
            </div>
            <div className='modal__stats'>
              <p className='modal__stats_title'>Stats:</p>
              <div className='modal__stats_grid'>
                {pokemon.stats.map((stat, i) => (
                  <div key={stat.name} className='modal__stat'>
                    <span>{stat.name}: </span>
                    {stat.value}
                    <div className='modal__stats_logo'>
                      <img src={statsImages[stat.name]} alt='' />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
        {statusLoading === 'loading' && (
          <div className='modal__loader'>
            <CircularProgress />
          </div>
        )}
        {statusLoading === 'error' && <div>Error</div>}
      </div>
    </Modal>
  )
}

export default ModalComponent
