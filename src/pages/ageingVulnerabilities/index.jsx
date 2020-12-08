import React from 'react';
import layout from '@splunk/react-page';
import AgeingVulnerabilities from './AgeingVulnerabilities';

layout(<AgeingVulnerabilities />, {
    pageTitle: 'Ageing Vulnerabilities',
    hideFooter: true,
    layout: 'fixed',
});
