/**
 * This file contains the configuration for the API endpoints and tokens we use.
 */
module.exports = {
  // Use the Vercel Environment Variable (process.env) for secrets.
  // **MAKE SURE YOU HAVE THESE VARIABLES SET IN YOUR VERCEL DASHBOARD!**
  clientId: process.env.891b1341-777a-4135-98a3-5094a0827cd6,
  obfuscatedClientSecret: process.env.Yjl8Q~zNNmLNOXI81TeiVCUj6TffH80McZZqNbXb,

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
