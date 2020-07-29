/**
 * At this file we place all of style that common beetween 
 * components and can use repearive.
 * Also App shell style located at this file.
 */

import { makeStyles } from '@material-ui/core/styles';

export const useAppStyle = makeStyles({
    pageRoot: {
        width: "100%",
        flex: 1,
        display: "flex",
    }
})