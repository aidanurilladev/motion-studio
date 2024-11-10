import Aptis from '@/assets/img/Aptis.png'
import Image from 'next/image'
import scss from './AptisSection.module.scss'
import { useTranslation } from 'react-i18next'

const AptisSection = () => {
  const { t } = useTranslation()

  return (
    <section className={scss.AptisSection}>
      <div className='container'>
        <div className={scss.content}>
          <h1>{t('aptisSection.title')}</h1>
          <Image className={scss.photos} src={Aptis} alt='Aptis Photo' />
          <h2>{t('aptisSection.subtitle')}</h2>
          <p>{t('aptisSection.description')}</p>
          <ul style={{ gap: '15px' }}>
            <li>{t('aptisSection.categories.listening')}</li>
            <li>{t('aptisSection.categories.reading')}</li>
            <li>{t('aptisSection.categories.writing')}</li>
            <li>{t('aptisSection.categories.speaking')}</li>
          </ul>
          <h2>{t('aptisSection.typesTitle')}</h2>
          <p>{t('aptisSection.info.first')}</p>
          <ul
            style={{
              marginTop: '50px',
              gap: '24px',
            }}
          >
            <li>{t('aptisSection.info.second')}</li>
            <li>{t('aptisSection.info.third')}</li>
            <li>{t('aptisSection.info.fourth')}</li>
            <li>{t('aptisSection.info.fifth')}</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default AptisSection
