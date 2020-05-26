import React from 'react';
import layout from '@splunk/react-page';
import RecurringVulnerabilities from './RecurringVulnerabilities';

layout(<RecurringVulnerabilities />, {
    pageTitle: 'Recurring Vulnerabilities',
    hideFooter: true,
    layout: 'fixed',
});
