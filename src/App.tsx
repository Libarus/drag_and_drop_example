import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import './App.css';
import { useState } from 'react';
import { ListItems } from './components/list-items';
import { DraggableList } from './components/draggable-list';

function App() {
    const [list1, setList1] = useState<string[]>(['qqq', 'www', 'eee', 'rrr']);
    const [list2, setList2] = useState<string[]>([]);

    const onDrop = (item: string) => {
        setList1(list1.filter((i) => i !== item));
        setList2([...list2, item]);
    };

    return (
        <>
            <DndProvider backend={HTML5Backend}>
                <ListItems list={list1} onDrop={onDrop} color='red' />
                <ListItems list={list2} onDrop={onDrop} color='green' />
                <DraggableList />
            </DndProvider>
        </>
    );
}

export default App;
