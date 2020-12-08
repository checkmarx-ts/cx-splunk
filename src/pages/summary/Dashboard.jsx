import React, { Component } from 'react';
import Select from '@splunk/react-ui/Select';
import styled, { ThemeProvider } from 'styled-components';
import { themes as reactUIThemes } from '@splunk/react-ui/themes';
import DashboardCore, { themes as dashboardCoreThemes } from '@splunk/dashboard-core';
import EnterpriseViewOnlyPreset, {
    themes as presetThemes,
} from '@splunk/dashboard-presets/EnterpriseViewOnlyPreset';
import definition from './definition.json';

const Container = styled.div`
    position: relative;
`;

const ThemeSwitcher = styled.div`
    position: absolute;
    right: 10px;
    top: 10px;
    z-index: 100;
`;

class Dashboard extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            themeId: 'enterpriseDark',
            definition: definition,
            cxIndex: typeof config !== "undefined" ? config.cxIndex : "main"
        };
        this.handleThemeChange = this.handleThemeChange.bind(this);
        if (this.state.cxIndex !== "main") {
            this.state.definition = JSON.parse(JSON.stringify(this.state.definition).replaceAll("sourcetype=", "index=" + this.state.cxIndex + " sourcetype="));
        }
    }

    handleThemeChange(e, { value }) {
        this.setState({
            themeId: value,
        });
    }

    render() {
        const { themeId } = this.state;
        const theme = {
            ...presetThemes[themeId],
            ...dashboardCoreThemes[themeId],
            ...reactUIThemes[themeId],
        };
        return (
            <ThemeProvider theme={theme}>
                <Container>
                    <ThemeSwitcher>
                        <Select value={themeId} onChange={this.handleThemeChange}>
                            <Select.Option label="Enterprise" value="enterprise" />
                            <Select.Option label="EnterpriseDark" value="enterpriseDark" />
                        </Select>
                    </ThemeSwitcher>
                    <DashboardCore
                        width="100%"
                        height="100%" //calc(100vh - 78px)
                        definition={this.state.definition}
                        preset={EnterpriseViewOnlyPreset}
                    />
                </Container>
            </ThemeProvider>
        );
    }
}

export default Dashboard;
