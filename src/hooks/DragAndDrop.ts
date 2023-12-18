import { RefObject, useCallback, useRef } from 'react';

type DraggableItemInfo = {
    elementRef: RefObject<HTMLDivElement>;
};

type InternalDraggableItemInfo = DraggableItemInfo & {
    startY: number;
};

type OnDragStartCallback = (args: {
    onDragMove: (event: MouseEvent) => void;
    onDrop: (event: MouseEvent) => void;
}) => void;

type RegisterDraggableItemCallback = (
  index: number,
  draggableItemInfo: DraggableItemInfo,
  onDragMove: (event: MouseEvent) => void
) => {
    onDragStart: OnDragStartCallback;
};

type DraggableListParams = {
    onOrderChange: (fromIndex: number, toIndex: number) => void;
};

function useDraggableList({ onOrderChange }: DraggableListParams) {
    const itemsRef = useRef<InternalDraggableItemInfo[]>([]);

    const registerDraggableItem = useCallback(
      (index: number, draggableItemInfo: DraggableItemInfo, onDragMoveCallback: (event: MouseEvent) => void) => {
          const item = {
              ...draggableItemInfo,
              startY: 0,
          };
          itemsRef.current[index] = item;

          const onDragStart: OnDragStartCallback = ({ onDragMove: onDragMoveCallback, onDrop }) => {
              item.startY = item.elementRef.current!.getBoundingClientRect().top;

              const onMouseUp = (event: MouseEvent) => {
                  let newIndex = index;
                  const draggableItemTop = item.elementRef.current!.getBoundingClientRect().top;
                  for (let i = 0; i < itemsRef.current.length; ++i) {
                      if (i === index) {
                          continue;
                      }
                      const currItem = itemsRef.current[i].elementRef.current!;
                      if (
                        (currItem.getBoundingClientRect().top < draggableItemTop && i > index) ||
                        (currItem.getBoundingClientRect().top > draggableItemTop && i < index)
                      ) {
                          newIndex = i;
                      }
                  }
                  onOrderChange(index, newIndex);
                  onDrop(event);

                  window.removeEventListener('mousemove', onDragMove);
                  window.removeEventListener('mouseup', onMouseUp);
              };

              const onDragMove = (event: MouseEvent) => {
                  const deltaY = event.clientY - item.startY;
                  item.elementRef.current!.style.transform = `translateY(${deltaY}px)`;
              };

              window.addEventListener('mousemove', onDragMove);
              window.addEventListener('mouseup', onMouseUp);
          };

          return {
              onDragStart,
          };
      },
      [onOrderChange]
    );

    return {
        registerDraggableItem,
    };
}

export { useDraggableList };

export type { DraggableItemInfo, RegisterDraggableItemCallback };