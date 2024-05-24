export async function revokeToken(clientId, clientSecret, accessToken) {
  const url = `https://api.github.com/applications/${clientId}/token`;
  const headers = new Headers();
  headers.append('Accept', 'application/vnd.github+json');
  headers.append('Authorization', `Bearer ${accessToken}`);
  headers.append('Content-Type', 'application/json');

  const body = JSON.stringify({ 
    access_token: accessToken,
    client_id: clientId,
    client_secret: clientSecret
  });
  
  try {
    const response = await fetch(url, {
      method: 'DELETE',
      headers: headers,
      body: body,
    });
    
    if (response.ok) {
      return true;
    } 
  } catch (error) {
    return false;
  }
}