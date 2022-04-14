import React from 'react';
import { registerRootComponent } from 'expo';

import { App } from './app';

function Index() {
    return (
        <App />
    )
}

registerRootComponent(Index);