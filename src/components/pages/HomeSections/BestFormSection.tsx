'use client'
import BestBookImage from '@/assets/img/BestBook.png'
import BestFormImage from '@/assets/img/BestForm.png'
import BestMoneyImage from '@/assets/img/BestMoney.png'
import BestPersonImage from '@/assets/img/BestPerson.png'
import BestTimeImage from '@/assets/img/BestTime.png'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import scss from './BestFormSection.module.scss'

const BestFormSection = () => {
	const { t } = useTranslation()

	return (
		<section className={scss.BestForm}>
			<div className='container'>
				<div className={scss.content}>
					<div className={scss.contentText}>
						<h1>{t('whyBest')}</h1>
						<p>{t('bestDescription')}</p>

						<Image src={BestFormImage} alt='Best from image' />
					</div>
					<div className={scss.contentBlock}>
						<div className={scss.block}>
							<Image src={BestBookImage} alt='book logo' />
							<h2>{t('partnersTitle')}</h2>
							<p>{t('partnersDescription')}</p>
						</div>
						<div className={scss.block}>
							<Image src={BestPersonImage} alt='book logo' />
							<h2>{t('experts')}</h2>
							<p>{t('expertsDescription')}</p>
						</div>
						<div className={scss.block}>
							<Image src={BestTimeImage} alt='book logo' />
							<h2>{t('time')}</h2>
							<p>{t('timeDescription')}</p>
						</div>
						<div className={scss.block}>
							<Image src={BestMoneyImage} alt='book logo' />
							<h2>{t('affordablePrices')}</h2>
							<p>{t('affordablePricesDescription')}</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default BestFormSection
