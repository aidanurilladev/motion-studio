'use client'
import america from '@/assets/img/america.png'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import Selection from '../Selections/Selection'
import scss from './ChooseSections.module.scss'

const ChooseSections = () => {
	const { t } = useTranslation()
	// const { data } = useGetCoutriesQuery();
	// console.log("🚀 ~ ChooseSections ~ data:", data);

	const countries = [
		{ id: 1, name: 'America', flag: '🇺🇸', img: america },
		{ id: 2, name: 'Great Britain', flag: '🇬🇧', img: america },
		{ id: 3, name: 'Austria', flag: '🇦🇹', img: america },
		{ id: 4, name: 'Germany', flag: '🇩🇪', img: america },
		{ id: 5, name: 'Holland', flag: '🇳🇱', img: america },
		{ id: 6, name: 'Ireland', flag: '🇮🇪', img: america },
		{ id: 7, name: 'Spain', flag: '🇪🇸', img: america },
		{ id: 8, name: 'Italy', flag: '🇮🇹', img: america },
		{ id: 9, name: 'Canada', flag: '🇨🇦', img: america },
		{ id: 10, name: 'Cyprus', flag: '🇨🇾', img: america },
		{ id: 11, name: 'China', flag: '🇨🇳', img: america },
		{ id: 12, name: 'Latvia', flag: '🇱🇻', img: america },
	]

	return (
		<section className={scss.ChooseSections}>
			<div className='container'>
				<div className={scss.content}>
					<h1>{t('chooseCountry')}</h1>
					<Selection />

					<div className={scss.cards}>
						{countries.map(country => (
							<div key={country.id} className={scss.card}>
								<Link href='/study/contries/universities'>
									<Image
										src={country.img}
										alt='america'
										width={172}
										height={172}
									/>
								</Link>
								<h4>{country.name}</h4>
								<h3>{t('higherEducationUK')}</h3>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

export default ChooseSections
