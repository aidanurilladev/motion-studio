'use client'

import email from '@/assets/img/BurgerEmails.svg'
import burgerMenu from '@/assets/img/burgermenu.png'
import telegram from '@/assets/img/BurgerTelegrams.svg'
import telephone from '@/assets/img/BurgerTelephone.svg'
import x from '@/assets/img/close.png'
import instagram from '@/assets/img/Instagram.svg'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import styles from './BurgerMenu.module.scss'

export default function BurgerMenu() {
	const [isOpen, setIsOpen] = useState<boolean>(false)

	useEffect(() => {
		const handleClickOutside = (event: any) => {
			if (isOpen && !event.target.closest(`.${styles.aa}`)) {
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
						<Link href='/'>Home</Link>
						<Link href='/about'>About Us</Link>
						<Link href='/study'>Study Abroad</Link>
						<Link onClick={() => setIsOpen(false)} href='#contact'>
							Contacts
						</Link>
					</nav>
					<div className={styles.languageSwitcher}>
						<span>EN</span>
						<span>RU</span>
						<span>KG</span>
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
