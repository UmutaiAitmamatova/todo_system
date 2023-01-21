import React, { useState } from 'react';
import classes from './Admin.module.scss'
import Button from '../../components/common/Button'
import ModalForm from '../../components/ModalForm';

const Admin = () => {
  const [activeModal, setActiveModal] = useState(true);
  const onClickBtn = () => {
    setActiveModal(false)
  }
  return (
    <div className={classes.admin}>
      <div className={classes.conteiner}>
        <div className={classes.inner}>
          <Button onClick={onClickBtn} title="Add todo"/>
          <div>{!activeModal && <ModalForm setActiveModal={setActiveModal}/>}</div>
        </div>
      </div>
    </div>
  )
}

export default Admin;