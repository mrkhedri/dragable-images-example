import { useEffect, useState } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

import { useAppSelector, useAppDispatch } from '../../hooks/redux'
import { updateUserSort } from '../../store/actions'

import s from './ImagesBox.module.scss'

const ImagesBox = () => {
  const mainUsers = useAppSelector(state => state.chat.users)
  const dispatch = useAppDispatch()

  const [users, setUsers] = useState(mainUsers)

  useEffect(() => {
    if (mainUsers.length !== users.length) {
      setUsers(mainUsers);
    }
    // eslint-disable-next-line
  }, [mainUsers.length])

  const handleOnDragEnd = (result: any) => {
    const items = Array.from(users);
    const [reorderedItem] = items.splice(result.source.index, 1);

    items.splice(result.destination.index, 0, reorderedItem);
    setUsers(items);
    dispatch(updateUserSort(items))
  }

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="users">
        {(provided) => (
          <ul className={s.wrapper} {...provided.droppableProps} ref={provided.innerRef}>
            {users.map((user: [string, string], index: number) => {
              const [src, name] = user

              return (
                <Draggable key={src} draggableId={src} index={index}>
                  {(provider) => (
                    <li className={s.img} ref={provider.innerRef} {...provider.draggableProps} {...provider.dragHandleProps}>
                      <img
                        src={require(`../../assets/${src}.png`).default}
                        alt={src}
                      />
                      <h6>{name}</h6>
                    </li>
                  )}
                </Draggable>
              )
            })}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default ImagesBox;