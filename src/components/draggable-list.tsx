import update from 'immutability-helper';
import { useCallback, useEffect, useState } from 'react';
import { DraggableItem } from './draggable-item';
import { TItem } from '../t';



export function DraggableList() {
    const [items, setItems] = useState<TItem[]>([
        {
            id: 'qwe123',
            uuid: 'qwe123_uuid',
            title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias cumque eum assumenda voluptate! Animi excepturi consequuntur ad porro enim. Recusandae!'
        },
        {
            id: 'rty456',
            uuid: 'rty456_uuid',
            title: 'Lorem ipsum dolor sit amet.',
        },
        {
            id: 'uio789',
            uuid: 'uio789_uuid',
            title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, possimus fugit!',
        },
        {
            id: 'qwe1232',
            uuid: 'qwe1232_uuid',
            title: 'qqq2',
        },
        {
            id: 'rty4562',
            uuid: 'rty4562_uuid',
            title: 'www2',
        },
        {
            id: 'uio7892',
            uuid: 'uio7892_uuid',
            title: 'eee2',
        },
        {
            id: 'qwe1233',
            uuid: 'qwe1233_uuid',
            title: 'qqq3',
        },
        {
            id: 'rty4563',
            uuid: 'rty4563_uuid',
            title: 'www3',
        },
        {
            id: 'uio7893',
            uuid: 'uio7893_uuid',
            title: 'eee3',
        },
    ]);

    // const moveBox = useCallback(
    //     (dragIndex: number, hoverIndex: number) => {
    //         const draggedBox = selectedIngredients[dragIndex];
    //         const dd = update(selectedIngredients, {
    //             $splice: [
    //                 [dragIndex, 1],
    //                 [hoverIndex, 0, draggedBox],
    //             ],
    //         });
    //         setSelectedIngredients(dd);
    //     },
    //     [selectedIngredients]
    // );

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
                    <DraggableItem key={item.uuid} item={item} index={index} moveBox={moveItem} />
                ))}
            </div>
        </>
    );
}
