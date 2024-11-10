import IELTS from '@/assets/img/IeltsImage.png';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import scss from './IeltsSection.module.scss';

const IeltsSection = () => {
  const { t } = useTranslation();

  return (
    <section className={scss.AptisSection}>
      <div className="container">
        <div className={scss.content}>
          <h1>{t('ielts_section_title')}</h1>
          <Image className={scss.photos} src={IELTS} alt={t('ielts_image_alt')} />
          <h2>{t('ielts_section_subtitle')}</h2>
          <p>{t('ielts_section_description')}</p>
          <ul style={{ gap: '10px' }}>
            <li>{t('listening_skill')}</li>
            <li>{t('reading_skill')}</li>
            <li>{t('writing_skill')}</li>
            <li>{t('speaking_skill')}</li>
          </ul>
          <h2>{t('ielts_test_types_title')}</h2>
          <p>{t('ielts_test_types_description')}</p>
          <ul
            style={{
              marginTop: '50px',
              gap: '25px',
            }}
          >
            <li>{t('reliable_experts_info')}</li>
            <li>{t('test_frequency_info')}</li>
            <li>{t('accepted_by_organizations')}</li>
            <li>{t('face_to_face_testing_info')}</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default IeltsSection;
