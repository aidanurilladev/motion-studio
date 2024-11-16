'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTranslation } from 'react-i18next'
import Vector from '../../../assets/img/Vector.svg'
import BurgerMenu from './BurgerMenu/BurgerMenu'
import scss from './Header.module.scss'

const Header = () => {
	const { t, i18n } = useTranslation()
	const pathname = usePathname()

	const handleScrollToSection = (id: string) => {
		const section = document.getElementById(id)
		if (section) {
			section.scrollIntoView({ behavior: 'smooth' })
		}
	}

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
						<Link href='/' className={pathname === '/' ? scss.active : ''}>
							{t('home')}
						</Link>
						<Link
							href='/about'
							className={pathname === '/about' ? scss.active : ''}
						>
							{t('about_us')}
						</Link>
						<Link
							href='/study'
							className={pathname === '/study' ? scss.active : ''}
						>
							{t('study_abroad')}
						</Link>
						{pathname === '/' ? (
							<a
								onClick={() => handleScrollToSection('contacts')}
								style={{ cursor: 'pointer' }}
							>
								{t('contacts')}
							</a>
						) : (
							<Link
								href='/'
								className={pathname === '/contacts' ? scss.active : ''}
							>
								{t('contacts')}
							</Link>
						)}
					</div>
					<div className={scss.headerInput}>
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
