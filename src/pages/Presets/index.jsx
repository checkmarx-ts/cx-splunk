import React from 'react';
import layout from '@splunk/react-page';
import Presets from './Presets';

layout(<Presets />, {
    pageTitle: 'Presets',
    hideFooter: true,
    layout: 'fixed',
});
