import { ReactElement } from "react";

export type TItem = {
    id: string;
    title: string;
};

export type TItemComponent = {
    id: string;
    component: ReactElement;
};