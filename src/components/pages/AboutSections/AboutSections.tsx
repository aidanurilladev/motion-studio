'use client'
import aboutImg from '@/assets/img/about.svg'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import scss from './AboutSections.module.scss'

const AboutSections = () => {
	const { t } = useTranslation()

	return (
		<section className={scss.AboutSections}>
			<div className='container'>
				<div className={scss.content}>
					<div className={scss.img}>
						<Image
							className={scss.aboutSvg}
							src={aboutImg}
							alt={t('aboutUs')}
						/>
					</div>
					<div className={scss.aboutUs}>
						<h3>{t('aboutUs')}</h3>
						<h1 className='title'>{t('bestEducationPlatform')}</h1>
						<p>{t('aboutUsText1')}</p>
						<p>{t('aboutUsText2')}</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default AboutSections
