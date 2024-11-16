'use client'
import email from '@/assets/img/BurgerEmails.svg'
import burgerMenu from '@/assets/img/burgermenu.png'
import telegram from '@/assets/img/BurgerTelegrams.svg'
import telephone from '@/assets/img/BurgerTelephone.svg'
import x from '@/assets/img/close.png'
import instagram from '@/assets/img/Instagram.svg'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import styles from './BurgerMenu.module.scss'

export default function BurgerMenu() {
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const { t, i18n } = useTranslation()
	// const router = useRouter()

	const handleLanguage = (lang: string) => {
		i18n?.changeLanguage(lang)
	}

	const pathname = usePathname()

	const handleScrollToSection = (id: string) => {
		const section = document.getElementById(id)
		if (section) {
			section.scrollIntoView({ behavior: 'smooth' })
		}
	}

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			const target = event.target as HTMLElement
			if (isOpen && !target.closest(`.${styles.aa}`)) {
				setIsOpen(false)
			}
		}

		if (isOpen) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'auto'
		}

		document.addEventListener('click', handleClickOutside)

		return () => {
			document.removeEventListener('click', handleClickOutside)
		}
	}, [isOpen])

	return (
		<div className={styles.burgerMenu}>
			{isOpen ? (
				<Image
					className={styles.closeButton}
					onClick={() => setIsOpen(false)}
					src={x}
					alt='menu'
					width={34}
					height={34}
				/>
			) : (
				<Image
					className={styles.menuButton}
					onClick={() => setIsOpen(true)}
					src={burgerMenu}
					alt='menu'
					width={34}
					height={34}
				/>
			)}

			{isOpen && (
				<div className={styles.menuOverlay}>
					<nav className={styles.menuNav}>
						<Link className={pathname === '/' ? styles.active : ''} href='/'>
							{t('home')}
						</Link>
						<Link
							className={pathname === '/about' ? styles.active : ''}
							href='/about'
						>
							{t('about_us')}
						</Link>
						<Link
							className={pathname === '/study' ? styles.active : ''}
							href='/study'
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
							<Link href='/'>{t('contacts')}</Link>
						)}
					</nav>
					<div className={styles.languageChange}>
						<span
							className={i18n.language === 'en' ? styles.activeLang : ''}
							onClick={() => handleLanguage('en')}
						>
							EN
						</span>
						<span
							className={i18n.language === 'ru' ? styles.activeLang : ''}
							onClick={() => handleLanguage('ru')}
						>
							RU
						</span>
						<span
							className={i18n.language === 'kg' ? styles.activeLang : ''}
							onClick={() => handleLanguage('kg')}
						>
							KG
						</span>
					</div>
					<div className={styles.soc}>
						<Link href='#'>
							<Image src={telegram} alt='telegram' />
						</Link>
						<Link href='#'>
							<Image src={instagram} alt='telegram' />
						</Link>
						<Link href='#'>
							<Image src={telephone} alt='telegram' />
						</Link>
						<Link href='#'>
							<Image src={email} alt='telegram' />
						</Link>
					</div>
				</div>
			)}
		</div>
	)
}
