import MainWallpaper from '@/assets/main-wallpaper.webp';

import PageLayout from '@/layouts/PageLayout';

function HomePage() {
  return (
    <PageLayout>
      <picture>
        <source srcSet={MainWallpaper} media="(max-width: 767px)" />

        <source
          srcSet={MainWallpaper}
          media="(min-width: 768px) and (max-width: 1023px)"
        />
        <source srcSet={MainWallpaper} media="(min-width: 1024px)" />
        <img
          src={MainWallpaper}
          alt="south-park wallpaper"
          width="1920"
          height="1080"
        />
      </picture>
    </PageLayout>
  );
}

export default HomePage;
