import Cambridge from '@/assets/img/Cambridge.png'
import Victor from '@/assets/img/victor.png'
import Image from 'next/image'
import scss from './CambrigeExams.module.scss'
import { useTranslation } from 'react-i18next'

const CambridgeExams = () => {
  const { t } = useTranslation()

  return (
    <section className={scss.CambridgeExams}>
      <div className="container">
        <div className={scss.content}>
          <h1>{t('cambridgeExams')}</h1>
          <Image
            className={scss.photos}
            src={Cambridge}
            alt={t('cambridgeExams')}
          />
          <h2>{t('whoAreTheCambridgeExamsFor')}</h2>
          <p>{t('cambridgeExamsDescription')}</p>
          <h2>{t('whatDoTheCambridgeExamsInvolve')}</h2>
          <h3>{t('officialRecognition')}</h3>
          <p>{t('officialRecognitionDescription')}</p>
          <p>{t('certificateDescription')}</p>
          <p>
            <span>{t('examPreparationCourses')}</span>
          </p>
          <div>
            <ul>
              <h4>
                <Image src={Victor} alt="Check" width={24} height={17.46} />
                <li>{t('examCourses.b2First')}</li>
              </h4>
              <h4>
                <Image src={Victor} alt="Check" width={24} height={17.46} />
                <li>{t('examCourses.c1Advanced')}</li>
              </h4>
              <h4>
                <Image src={Victor} alt="Check" width={24} height={17.46} />
                <li>{t('examCourses.c2Proficiency')}</li>
              </h4>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CambridgeExams
