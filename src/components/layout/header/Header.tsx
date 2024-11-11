'use client'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import Vector from '../../../assets/img/Vector.svg'
import BurgerMenu from './BurgerMenu/BurgerMenu'
import scss from './Header.module.scss'

const Header: FC = () => {
	const { t, i18n } = useTranslation()

	const handleLanguageChange = (
		event: React.ChangeEvent<HTMLSelectElement>
	) => {
		i18n.changeLanguage(event.target.value)
	}

	return (
		<header className={scss.Header}>
			<div className='container'>
				<div className={scss.content}>
					<div className={scss.Logo}>
						<Link href='/'>
							<Image src={Vector} alt='Logo' width={50} height={50} />
						</Link>
					</div>
					<div className={scss.nav}>
						<Link href='/'>{t('home')}</Link>
						<Link href='/about'>{t('about_us')}</Link>
						<Link href='/study'>{t('study_abroad')}</Link>
						<Link href='#'>{t('contacts')}</Link>
					</div>
					<div className={scss.headerInput}>
						<div className={scss.searchInput}>
							<input type='text' placeholder={t('search_placeholder')} />
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='16'
								height='16'
								fill='currentColor'
								viewBox='0 0 16 16'
								className={scss.searchIcon}
							>
								<path d='M11.742 10.344a6.5 6.5 0 1 0-1.398 1.398l3.85 3.85a1 1 0 0 0 1.415-1.415l-3.85-3.85zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z' />
							</svg>
						</div>
						<select
							onChange={handleLanguageChange}
							defaultValue={i18n.language}
						>
							<option value='en'>EN</option>
							<option value='ru'>RU</option>
							<option value='kg'>KG</option>
						</select>
					</div>
					<div className={scss.burgerMenu}>
						<BurgerMenu />
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
