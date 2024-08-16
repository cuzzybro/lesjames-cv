/** @type {import('next').NextConfig} */
const nextConfig = {

    env: {
        GITHUB_URL: 'https://github.com/cuzzybro',
        FACEBOOK_URL: 'https://facebook.com',
        TWITTER_URL: 'https://x.com',
        INSTAGRAM_URL: 'https://instagram.com',
        LINKEDIN_URL: 'https://linkedin.com',
        GOOGLE_URL: 'https://google.com',
        YOUTUBE_URL: 'https://youtube.com',
        MESSENGER_URL: 'https://messenger.com',
    },
    basePath: '/lesjames-resume',
    output: 'export',
    reactStrictMode: true

};



export default nextConfig;


