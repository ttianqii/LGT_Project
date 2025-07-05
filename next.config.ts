import type { NextConfig } from 'next';
import withNextIntl from 'next-intl/plugin';

// 👇 ระบุ path ไปยัง next-intl config
const withIntl = withNextIntl('./next-intl.config.ts');

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {},
  },
  // เพิ่ม config อื่นๆ ได้ที่นี่
};

export default withIntl(nextConfig);
