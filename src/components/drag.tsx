import { TItem, TItemComponent } from "../t";
import { DraggableList } from "./draggable-list";

const items: TItem[] = [
    {
        id: 'qwe123',
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias cumque eum assumenda voluptate! Animi excepturi consequuntur ad porro enim. Recusandae!'
    },
    {
        id: 'rty456',
        title: 'Lorem dolor sit amet.',
    },
    {
        id: 'uio789',
        title: 'Ipsum sit amet consectetur adipisicing elit. Dolor, possimus fugit!',
    },
    {
        id: 'qwe1232',
        title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam modi commodi alias eos asperiores perspiciatis.',
    },
    {
        id: 'rty4562',
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptas. Assumenda.',
    },
    {
        id: 'uio7892',
        title: 'Lorem ipsum dolor sit, amet consectetur',
    },
    {
        id: 'qwe1233',
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quaerat veniam placeat mollitia, laborum architecto pariatur doloremque! Ullam recusandae rerum magni est, esse reprehenderit, alias cum non necessitatibus voluptatem porro.',
    },
    {
        id: 'rty4563',
        title: 'www3',
    },
    {
        id: 'uio7893',
        title: 'eee3',
    },
];

export function Drag() {
    
    const spisok: TItemComponent[] = items.map((item: TItem, index: number) => {
        const comp: TItemComponent = {
            id: item.id,
            component: (
                <div>
                    <img src='https://avatars.cloudflare.steamstatic.com/7397e80cf64e7f0fe92fd2c41383fc1945bca45d_medium.jpg' width={32} height={32} />
                    {item.title}
                </div>
            )
        }

        return comp;
    });

    return (
        <DraggableList itemsData={spisok} />
    )
}