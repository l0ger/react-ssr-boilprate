import { GetServerSideProps } from 'next';
import cookie from 'cookie'

export const privateRoute = (Context:any) => {
    const {res , req } = Context;
    const requestCookie = req?.headers.cookie;
    const parsedCookie = cookie.parse(requestCookie || '');
    if(!parsedCookie?.accessToken){
      res.writeHead(301, {
        Location: '/authentication/login'
      });
      res.end();
    }
  }
  