import { useDrop } from 'react-dnd';
import { ListItem } from './list-item';
import { useRef } from 'react';

export function ListItems({ list, onDrop, color }: any) {
    const ref = useRef<HTMLDivElement>(null);

    const [, dropRef] = useDrop({
        accept: 'ingredient',
        drop(item: any) {
            console.log('drop', item);
            if (onDrop) {
                onDrop(item.item);
            }
        },
    });

    dropRef(ref);

    return (
        <div ref={ref} style={{margin:"20px", border:`1px solid ${color}`}}>
            <ul>
                {list.map((item: any) => (
                    <ListItem key={item} item={item} />
                ))}
            </ul>
        </div>
    );
}
