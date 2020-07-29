import Document, { Html, Head, Main, NextScript } from 'next/document'
import cookie from 'cookie'
import { NextApiRequest } from 'next';
import { useRouter, Router } from 'next/router';

const getAccessTokenFromRequest=(request:NextApiRequest)=>{
    return cookie.parse(request.headers.cookie || '')?.accessToken;
  }
  
  const redirectToLogin=()=>{
    const router = useRouter();
    router.push("/authentication/login");
  }

class MyDocument extends Document {

  static async getInitialProps(ctx:any) {
    const initialProps = await Document.getInitialProps(ctx);
    if(ctx.req){
        const accessToken = getAccessTokenFromRequest(ctx.req);
        if(accessToken){
            redirectToLogin()
        }
    }
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
