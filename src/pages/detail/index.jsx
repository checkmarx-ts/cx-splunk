import React from 'react';
import layout from '@splunk/react-page';
import Detail from './Detail';

layout(<Detail />, {
    pageTitle: 'Detail',
    hideFooter: true,
    layout: 'fixed',
});
