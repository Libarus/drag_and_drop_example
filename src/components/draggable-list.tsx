import { useState } from 'react';
import { DraggableItem } from './draggable-item';
import { type TItemComponent } from '../t';

type Props = {
    itemsData: TItemComponent[]
}

export function DraggableList({ itemsData }: Props) {
    const [items, setItems] = useState<TItemComponent[]>(itemsData);

    const moveItem = (dragIndex: number, hoverIndex: number) => {
        const dragItem = items[dragIndex];
        const newItems = [...items];
        newItems.splice(dragIndex, 1);
        newItems.splice(hoverIndex, 0, dragItem);
        setItems(newItems);
      };

    return (
        <>
            <div>DraggableList</div>
            <div style={{ width: '300px', border: '1px solid silver' }}>
                {items.map((item, index) => (
                    <DraggableItem key={item.id} item={item} index={index} moveBox={moveItem} />
                ))}
            </div>
        </>
    );
}
