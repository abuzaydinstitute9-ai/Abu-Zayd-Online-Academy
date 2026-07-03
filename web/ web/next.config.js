/** @type {import('next').NextConfig} */
const repoName = "Abu-Zayd-Online-Academy"; // <-- must match your GitHub repo name exactly
const isGithubActions = process.env.GITHUB_ACTIONS === "true";

const nextConfig = {
  output: "export",
  basePath: isGithubActions ? `/${repoName}` : "",
  assetPrefix: isGithubActions ? `/${repoName}/` : "",
  images: {
    unoptimized: true,
    remotePatterns: [{ protocol: "https", hostname: "res.cloudinary.com" }],
  },
};
module.exports = nextConfig;
