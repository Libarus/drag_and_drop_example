import { useRef } from "react";
import { type Identifier, XYCoord } from "dnd-core";
import {
  DragSourceMonitor,
  DropTargetMonitor,
  useDrag,
  useDrop,
} from "react-dnd";
import { TItem } from "../t";

interface DragItem {
  item: TItem;
  index: number;
}

export function DraggableItem({ item, index, moveBox }: any) {
  const ref = useRef<HTMLDivElement>(null);

  const [{ isDragging }, drag] = useDrag({
    type: "boxm",
    item: () => {
      return { item, index } as DragItem;
    },
    collect: (monitor: DragSourceMonitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [{handlerId}, drop] = useDrop<DragItem, void, { handlerId: Identifier | null }>({
    accept: "boxm",
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item: DragItem, monitor: DropTargetMonitor) {
      if (!ref.current) {
        return;
      }

      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = ref.current.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      moveBox(dragIndex, hoverIndex);

      item.index = hoverIndex;
    },
  });

  drag(drop(ref));
  const opacity = isDragging ? 0 : 1;

  return (
    <div
      ref={ref}
      style={{
        opacity,
        border: "1px solid black",
        margin: "10px",
        padding: "10px",
      }}
      data-handler-id={handlerId}
    >
      <div style={{ opacity }}>
        {item.title} [{item.uuid}]
      </div>
    </div>
  );
}
