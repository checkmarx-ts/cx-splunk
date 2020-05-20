import React from 'react';
import layout from '@splunk/react-page';
import Dashboard from './Dashboard';

layout(<Dashboard />, {
    pageTitle: 'Summary',
    hideFooter: true,
    layout: 'fixed',
});
