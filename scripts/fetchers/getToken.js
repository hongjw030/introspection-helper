export async function getToken(code, redirectUri){
  try{
    const response = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        client_id: 'Ov23liS8uJ1LJSioNTPc',
        client_secret: '904fcc78be315af16780349f2f74d701aeb3fd34',
        code: code,
        redirect_uri: redirectUri
      })
    });

    const data = await response.json();
    const token = data.access_token;
    return token;
  }catch(error){
    return;
  }
}