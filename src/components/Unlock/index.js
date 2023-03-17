// Write your code here
import {useState} from 'react'
import {BackGround, Headers} from './styledComponents'
import './index.css'

const Unlock = () => {
  const [lockStatus, setLock] = useState(true)
  const [textStatus, setText] = useState(true)
  const [buttonStatus, setButton] = useState(true)

  const onClickButton = () => {
    setLock(!lockStatus)
    setText(!textStatus)
    setButton(!buttonStatus)
  }

  return (
    <div>
      <BackGround>
        <center>
          {lockStatus ? (
            <img
              src="https://assets.ccbp.in/frontend/hooks/lock-img.png"
              className="lockImage"
              alt="lock"
            />
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/hooks/unlock-img.png "
              className="lockImage"
              alt="unlock"
            />
          )}
          {textStatus ? (
            <Headers>Your Device is Locked</Headers>
          ) : (
            <Headers>Your Device is Unlocked</Headers>
          )}

          {buttonStatus ? (
            <button className="button" type="button" onClick={onClickButton}>
              unlock
            </button>
          ) : (
            <button className="button" type="button" onClick={onClickButton}>
              Lock
            </button>
          )}
        </center>
      </BackGround>
    </div>
  )
}
export default Unlock
