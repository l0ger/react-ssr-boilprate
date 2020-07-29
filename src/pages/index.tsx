import React from 'react';
import Typography from '@material-ui/core/Typography';
import { useAppStyle } from '../theme/commonStyle';
import { GetServerSideProps } from 'next';
import Head from 'next/head'
import { privateRoute } from './../utils/privateRoute';
export default function Home() {
  const classes = useAppStyle();
  

  return (
    <div  className={classes.pageRoot}   >
        <Head>
        <title>Mehmoonchi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
       <Typography align="center" variant="h4" style={{width:"100%",height:"100%"}} >Home Page</Typography>.
     </div>
  );
}

export const getServerSideProps:GetServerSideProps = async (Context) => {
  privateRoute(Context)
  return { props:{} };
}
