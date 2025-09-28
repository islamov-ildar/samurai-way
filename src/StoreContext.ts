import React from "react";
import { Store } from 'redux';
import { AnyAction } from 'redux';

interface RootState {
    postPage: any;
    dialogsPage: any;
    sidebar: any;
}

const StoreContext = React.createContext<Store<RootState, AnyAction> | null>(null);

export default StoreContext;