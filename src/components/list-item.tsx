import { useRef } from "react";
import { useDrag } from "react-dnd";

export function ListItem({ item }: any) {
    const ref = useRef<HTMLLIElement | null>(null);
    
    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'ingredient',
        item: { item },
        collect: monitor => ({
            isDragging: monitor.isDragging(),
        }),
    }));

    const opacity = isDragging ? 0.2 : 1;

    drag(ref);

    return (
        <li style={{ opacity }} ref={ref}>{item}</li>
    )
}