import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { getDirection } from '../../localize/localize';
const direction = getDirection();

export const useLoginStyles = makeStyles((theme: Theme) =>
    createStyles({
        dialogAppBar: {
            position: 'relative',
          },
        root: {
            height: "100vh",
            width: "100%",
            display: "flex",
            flexDirection: "column",
        },
        logoSection: {
            backgroundColor: theme.palette.primary.main,
            height: "30vh",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
        },
        wrapper: {
            width: "95%",
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2)
        },
        title: {
            marginTop: theme.spacing(5),
            marginBottom: theme.spacing(2),
            fontWeight:'bold'
          },
          wellCome:{
            marginTop: theme.spacing(5),
            marginBottom: theme.spacing(2),
          },
        numberField: {
            marginTop: theme.spacing(2),
        },
        nextBtnWraper: {
            width: "100%",
            position: "relative"
        },
        nextBtn: {
            position: "absolute",
            [direction === 'rtl' ? 'right' : 'left']: 0,
            width: 150,
            margin: theme.spacing(4),
        },
        phoneNumberLabel:{
            fontSize:'1.2rem'          }
    }),
);