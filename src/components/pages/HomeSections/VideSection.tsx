import { useTranslation } from 'react-i18next';
import scss from './VideoSection.module.scss';

const VideoSection = () => {
  const { t } = useTranslation();

  return (
    <section className={scss.VideoSection}>
      <div className='container'>
        <div className={scss.content}>
          <h1>{t('videoTestimonialsTitle')}</h1>
          <div className={scss.videoWrapper}>
            <div className={scss.videoScroll}>
              <iframe
                width='570px'
                height='340px'
                src='https://www.youtube.com/embed/lWz-46NPqdk?si=yyDXQy8y1xDWXbIc'
                title='YouTube video player'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              ></iframe>
              <iframe
                width='570px'
                height='340px'
                src='https://www.youtube.com/embed/lWz-46NPqdk?si=yyDXQy8y1xDWXbIc'
                title='YouTube video player'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              ></iframe>
              <iframe
                width='570px'
                height='340px'
                src='https://www.youtube.com/embed/lWz-46NPqdk?si=yyDXQy8y1xDWXbIc'
                title='YouTube video player'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              ></iframe>
              <iframe
                width='570px'
                height='340px'
                src='https://www.youtube.com/embed/lWz-46NPqdk?si=yyDXQy8y1xDWXbIc'
                title='YouTube video player'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
