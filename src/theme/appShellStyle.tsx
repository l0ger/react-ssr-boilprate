/**
 *  App shell style located at this file.
 *  please use theme variables for color and other related theme values.
 */
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useAppShellStyle = makeStyles((theme: Theme) => createStyles(
    {
        appShellContainer: {
            display: 'flex',
            flexDirection: "column",
        },
        appBarRoot: {
            backgroundColor:theme.palette.background.default, 
            color: theme.palette.common.black
        },
        appBarTitle: {
            flex: 1,
            textAlign: 'center'
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        bottomTabRoot: {
            width: "100%",
            position: "fixed",
            bottom: 0,
            backgroundColor:theme.palette.background.default, 
            borderColor: theme.palette.grey[200],
            borderWidth: 1,
            borderStyle:"solid"
        },
        bottomTabAction:{
            color: theme.palette.common.black,
        }            

    }
))