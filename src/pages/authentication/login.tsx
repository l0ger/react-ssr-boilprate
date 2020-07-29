
import React, { useState } from 'react';
import { useAppStyle } from '../../theme/commonStyle';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { useTranslation } from 'react-i18next';
import { useLoginStyles } from '../../styles/loginPage/loginStyle';

import { useFormik } from 'formik';

interface Values {
    mobileNumber: string
}

export default function LoginPage(props: any) {

    const classes = useAppStyle();
    const loginStyle = useLoginStyles();
    const { t } = useTranslation('loginPage');
    const [showLogo, setShowLogo] = useState(true);
 
    const formik = useFormik({
        initialValues: {
            mobileNumber: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });


    const onClickPhoneNumber = (event: any) => {
        setShowLogo(false)
    }

    const onCloseDialog = () => {
        setShowLogo(false)
    }


    return (
        <div className={classes.pageRoot}  >
            <form className={loginStyle.root} noValidate autoComplete="off" onSubmit={formik.handleSubmit} >
                {
                    showLogo ? (
                        <div className={loginStyle.logoSection} >
                            <Typography className={loginStyle.title} variant="h4" component="h1" align={'center'} color="textSecondary" >
                                {t("Mehmoonchi")}
                            </Typography>
                        </div>
                    ) : null
                }
                <div className={loginStyle.wrapper}>
                    <Typography className={loginStyle.wellCome} variant="h5" component="h2" >
                        {t("Well Come")}
                    </Typography>
                    <Typography variant="body2" component="h3" gutterBottom >
                        {t("Enter phone number")}
                    </Typography>
                    <TextField id="mobileNumber" className={loginStyle.numberField}
                        onClick={onClickPhoneNumber}
                        InputLabelProps={{ className: loginStyle.phoneNumberLabel }}
                        label={t("Phone Number")} placeholder={t("Phone Number Example")}
                        onChange={formik.handleChange}
                        value={formik.values.mobileNumber}
                        autoFocus required fullWidth focused />
                </div>
                <div className={loginStyle.nextBtnWraper} >
                    <Button className={loginStyle.nextBtn} variant="contained" color="primary" fullWidth={false} type={"submit"}>
                        {t("Next Step")}
                    </Button>
                </div>

            </form>
        </div>
    )
}