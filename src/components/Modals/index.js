import React,{ useState } from 'react'
import './style.css';
import Modal from 'react-modal';

/**
* @author
* @function Modals
**/

const Modals = (props) => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
  return(
  
    <div>
      
      <button onClick={() => setModalIsOpen(true)}>Add Candidates</button>
      
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={
                {
                  overlay:{
                      backgroundColor: '#333',
                  },

                }
              }>
              
              <div className="ModalContainer">
                
                <select>
                  <option selected>Select Candidate</option>
                  <option>1st Candidate</option>
                </select>
                
                <button onClick={() => setModalIsOpen(false)}>Add Candidates</button>
                
              </div>
              
            </Modal>
            
    </div>
  )

}

export default Modals