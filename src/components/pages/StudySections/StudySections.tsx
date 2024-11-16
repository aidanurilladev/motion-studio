'use client'
import imgAbroad from '@/assets/img/Bitmap.svg'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import scss from './StudySections.module.scss'

const StudySections = () => {
	const { t } = useTranslation()

	return (
		<section className={scss.StudySections}>
			<div className='container'>
				<h2>{t('study_abroad_title')}</h2>
				<div className={scss.content}>
					<div className={scss.img}>
						<Image className={scss.imgAbroad} src={imgAbroad} alt='abroad' />
					</div>
					<div className={scss.AbroadUs}>
						<p>
							<span>{t('motion_study_intro')}</span> {t('language_courses')},{' '}
							{t('secondar_education')}, {t('higher_educations')},{' '}
							{t('professional_development_programmes')}{' '}
							{t('universities_list')}, {t('private_schools_list')},{' '}
							{t('state_schools_list')}, {t('adult_language_schools')},{' '}
							{t('youth_language_schools')}, {t('business_schools_list')},{' '}
							{t('executive_centres')}, {t('summer_camps')},{' '}
							{t('guardianship_services')}
						</p>
						<ol>
							{t('universities_list')}: <li>- {t('universities_list')}</li>
							<li>- {t('private_schools_list')}</li>
							<li>- {t('state_schools_list')}</li>
							<li>- {t('adult_language_schools')}</li>
							<li>- {t('youth_language_schools')}</li>
							<li>- {t('business_schools_list')}</li>
							<li>- {t('executive_centres')}</li>
							<li>- {t('summer_camps')}</li>
							<li>- {t('guardianship_services')}</li>
						</ol>
						<Link href='/study/contries'>
							<button>{t('explore_button')}</button>
						</Link>
					</div>
				</div>
			</div>
		</section>
	)
}

export default StudySections
