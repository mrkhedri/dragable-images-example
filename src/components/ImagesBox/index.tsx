import { useEffect, useState, useLayoutEffect, useRef } from 'react'
import cx from 'clsx'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

import { useAppSelector, useAppDispatch } from '../../hooks/redux'
import { updateUserSort } from '../../store/actions'

import s from './ImagesBox.module.scss'

const ImagesBox = () => {
  const mainUsers = useAppSelector(state => state.chat.users)
  const dispatch = useAppDispatch()
  const listRef = useRef<any>(null)

  const [users, setUsers] = useState(JSON.parse(mainUsers))
  const [imagesClassName, setImagesClassName] = useState<string | null>(null)

  useEffect(() => {
    if (mainUsers !== JSON.stringify(users)) {
      setUsers(JSON.parse(mainUsers));
    }
    // eslint-disable-next-line
  }, [mainUsers])

  useLayoutEffect(() => {
    if (JSON.parse(mainUsers).length > 4) {
      setImagesClassName(s.maxImages)
    } else {
      setImagesClassName(s.mediumImages)
    }
    // eslint-disable-next-line
  }, [mainUsers, listRef.current])

  const handleOnDragEnd = (result: any) => {
    if (result.destination) {
      const items = Array.from(users);
      const [reorderedItem] = items.splice(result.source.index, 1);

      items.splice(result.destination.index, 0, reorderedItem);
      setUsers(items);
      dispatch(updateUserSort(JSON.stringify(items)))
    }
  }

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="users">
        {(provided) => (
          <div className={s.listWrapper} ref={listRef}>
            <ul className={s.wrapper} {...provided.droppableProps} ref={provided.innerRef}>
              {users.map((user: [string, string], index: number) => {
                const [src, name] = user

                return (
                  <Draggable key={src} draggableId={src} index={index}>
                    {(provider) => (
                      <li
                        className={cx(s.img, imagesClassName)}
                        ref={provider.innerRef}
                        {...provider.draggableProps}
                        {...provider.dragHandleProps}
                      >
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
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default ImagesBox;