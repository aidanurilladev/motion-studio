'use client'
import instagram from '@/assets/img/InstagramLogo.svg'
import telegram from '@/assets/img/TelegramLogo.png'
import mobileLogo from '@/assets/img/WhiteLogo.png'
import youtube from '@/assets/img/YoutubeLogo.png'
import Image from 'next/image'
import scss from './Footer.module.scss'

const Footer = () => {
	return (
		<footer className={scss.Footer}>
			<div className='container'>
				<div className={scss.content}>
					<div className={scss.navs}>
						<Image src={mobileLogo} alt='logo' />
						<nav className={scss.inWeb}>
							<a href='#'>Home</a>
							<a href='#about'>About Us</a>
							<a href='#interior'>Study Abroad</a>
							<a href='#contact'>Contacts</a>
						</nav>
						<nav className={scss.soc}>
							<a href='https://t.me/Amir030707' target='_blank'>
								<Image src={telegram} alt='telegram' width={30} height={27} />
							</a>
							<a href='#'>
								<Image src={youtube} alt='youtube' width={30} height={27} />
							</a>
							<a href='#'>
								<Image src={instagram} alt='instagram' width={30} height={27} />
							</a>
						</nav>
					</div>
					<hr />
					<span>C 2023 Motion Study LLC</span>
				</div>
			</div>
		</footer>
	)
}

export default Footer
