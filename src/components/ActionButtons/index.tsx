
import { useAppSelector, useAppDispatch } from '../../hooks/redux'
import { addUser, removeUser } from '../../store/actions'

import s from './ActionButtons.module.scss'

const ActionButtons = () => {
  const currentUsers = useAppSelector(state => state.chat.users)
  const dispatch = useAppDispatch()

  const handleAddUser = (id: number) => dispatch(addUser(id, currentUsers))

  const handleRemoveUser = (id: number) => dispatch(removeUser(id, currentUsers))

  const isAminAdded = currentUsers.some((user: string[]) => Number(user[0]) === 5)
  const isReyhanehAdded = currentUsers.some((user: string[]) => Number(user[0]) === 6)

  return (
    <div className={s.wrapper}>
      <button
        role="presentation"
        onClick={() => isAminAdded ? handleRemoveUser(5) : handleAddUser(5)}
        className={isAminAdded && s.remove}
      >
        {isAminAdded ? 'remove Amin' : 'Add Amin'}
      </button>

      <button
        role="presentation"
        onClick={() => isReyhanehAdded ? handleRemoveUser(6) : handleAddUser(6)}
        className={isReyhanehAdded && s.remove}
      >
        {isReyhanehAdded ? 'remove Reyhaneh' : 'Add Reyhaneh'}
      </button>
    </div>
  );
}

export default ActionButtons;