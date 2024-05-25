export async function revokeToken(clientId, clientSecret, accessToken) {
  const url = `https://api.github.com/applications/${clientId}/token`;

  const body = JSON.stringify({ 
    access_token: accessToken,
  });
  
  try {
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        Authorization: `Basic ${Buffer.from(clientId + ':' + clientSecret).toString('base64')}`,
        Accept: 'application/vnd.github+json',
        'X-GitHub-Api-Version': '2022-11-28',
      },
      body: body,
    });
    if (response.ok) {
      return true;
    } 
  } catch (error) {
    return false;
  }
}