import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  console.log('미들웨어가 실행되고 있음!');
  if (request.nextUrl.pathname.startsWith('/products/1004')) {
    console.log('미들웨어 - 경로를 리다이렉팅함!');
    return NextResponse.redirect(new URL('/products', request.url));
  }
}
//특정한 경로에서만 미들웨어를 실행시키려면, config matcher 작성 후 export
export const config = {
  matcher: ['/products/:path*', '/about'],
  /**
   * /products/slug 다이나믹 경로에 해당하는 곳에서만 미들웨어를
    실행시키고 싶으면, /products/:path+ 로 작성
   */
};
