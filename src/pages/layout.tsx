import React from 'react';
import { ServerStyleSheets, ThemeProvider } from '@material-ui/core/styles';
import { theme } from '../theme/theme';
import AppBar from "../components/app_shell/appBar";
import BottomTab from '../components/app_shell/bottomTab';
import { useAppShellStyle } from '../theme/appShellStyle';
import CssBaseline from '@material-ui/core/CssBaseline';

function Layout({ children }: any) {
    const classes = useAppShellStyle();
    React.useEffect(() => {
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles?.parentElement?.removeChild(jssStyles);
        }
    }, []);

    return (
        <div className={classes.appShellContainer}>
            <AppBar />
            {children}
            <BottomTab />
        </div>
    );
}

export default Layout;
