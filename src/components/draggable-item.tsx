import { useRef } from "react";
import { type Identifier, XYCoord } from 'dnd-core';
import { DragSourceMonitor, DropTargetMonitor, useDrag, useDrop } from "react-dnd";

interface DragItem {
    item: any;
    index: number;
}

export function DraggableItem({ item, index, moveBox }: any) {
    const ref = useRef<HTMLDivElement>(null);

    const [{ isDragging }, drag] = useDrag({
        type: 'boxm',
        item: () => {
            return { item, index } as DragItem;
        },
        collect: (monitor: DragSourceMonitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    const [, drop] = useDrop<DragItem, void, { handlerId: Identifier | null }>({
        accept: 'boxm',
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
            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
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
        <div key={item.id} ref={ref} style={{opacity, backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(16)}`, float:'left', width:'50px', border:`1px solid black`, margin:'10px', padding: '10px'}}>
            {item.title}
        </div>
    );
}