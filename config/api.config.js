/**
 * This file contains the configuration for the API endpoints and tokens we use.
 */
module.exports = {
  // 🚨 CRITICAL FIX: HARDCODE YOUR ID TO BYPASS VERCEL ENV ISSUES
  clientId: '891b1341-7f78-41f5-9ba9-509a00027cd6', 
  
  // Keep using the environment variable for the secret, or hardcode the secret value as a string if necessary
  obfuscatedClientSecret: process.env.CLIENT_SECRET,

  // 🚨 CRITICAL CHANGE 🚨
  // The redirectUri MUST be your Vercel URL.
  // Replace the placeholder below with your actual domain (e.g., https://my-onedrive-index.vercel.app).
  redirectUri: 'https://primeeeyk-nu.vercel.app/',

  // These are the URLs of the OneDrive API endpoints.
  authApi: 'https://login.microsoftonline.com/common/oauth2/v2.0/token',
  driveApi: 'https://graph.microsoft.com/v1.0/me/drive',

  // The scope we require are listed here.
  scope: 'user.read files.read.all offline_access',

  // Cache-Control header, check Vercel documentation for more details.
  cacheControlHeader: 'max-age=0, s-maxage=60, stale-while-revalidate',
}
