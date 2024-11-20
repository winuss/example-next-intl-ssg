import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // 정적 렌더링을 위한 설정
  trailingSlash: true, // URL 끝에 / 추가
  images: {
    unoptimized: true, // S3 호스팅을 위해 이미지 최적화 비활성화
  },
};

export default withNextIntl(nextConfig);
