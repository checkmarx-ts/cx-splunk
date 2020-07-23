import React from 'react';
import layout from '@splunk/react-page';
import Languages from './Languages';

layout(<Languages />, {
    pageTitle: 'Languages',
    hideFooter: true,
    layout: 'fixed',
});
