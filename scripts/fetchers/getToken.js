export async function getToken(code, redirectUri){
  try{
    const response = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        client_id: 'Ov23lisuJkODBkIrQm4e',
        client_secret: '2483bad98853659aade58aa88f50b1a44765775a',
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