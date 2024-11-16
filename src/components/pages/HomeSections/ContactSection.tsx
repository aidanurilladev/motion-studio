'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import scss from './ContactSection.module.scss'

import email from '@/assets/img/contactEmail.svg'
import phone from '@/assets/img/ContactPhone.svg'
import instagram from '@/assets/img/InstagramLogo.svg'
import ShareLinks from '@/assets/img/Links.svg'
import telegram from '@/assets/img/TelegramLogo.png'
import whatsapp from '@/assets/img/Whatsapp.png'

const ContactSection = () => {
	const [openModal, setOpenModal] = useState(false)

	const toggleModal = () => {
		setOpenModal(!openModal)
	}

	return (
		<section id='contacts' className={scss.ContactSection}>
			<div className='container'>
				<div className={scss.content}>
					<div className={scss.block}>
						<h2>Send a message</h2>
						<div className={scss.blockWrapper}>
							<input type='text' placeholder='First Name' />
							<input type='text' placeholder='Last Name' />
							<input type='number' placeholder='Phone' />
							<input type='email' placeholder='Email' />
							<input
								className={scss.fullWidth}
								type='text'
								placeholder='Group or company'
							/>
							<textarea placeholder='How can we help?'></textarea>
							<button>Submit</button>
						</div>
					</div>
					<div className={scss.borderBox}>
						<div className={scss.box}>
							<h2>Contact info</h2>
							<div className={scss.boxWrapper}>
								<h3>
									<Image src={phone} alt='phone' />
									<span>+996 500 34 84 39</span>
								</h3>
								<h3>
									<Image src={email} alt='phone' />
									<span>motionweb312@gmail.com</span>
								</h3>
								<nav>
									<Link href='/'>
										<Image src={telegram} alt='telegram' />
									</Link>
									<Link href='/'>
										<Image src={whatsapp} alt='whatsapp' />
									</Link>
									<Link href='/'>
										<Image src={instagram} alt='instagram' />
									</Link>
								</nav>
							</div>
							<div className={scss.map}>
								<iframe
									src='https://www.google.com/maps/embed?...'
									width='430'
									height='250'
									style={{ border: 0 }}
									className={scss.iframe}
									loading='lazy'
									referrerPolicy='no-referrer-when-downgrade'
								/>
							</div>
						</div>
						<button className={scss.ShareLinks} onClick={toggleModal}>
							<Image src={ShareLinks} alt='share link' />
						</button>
					</div>
					{openModal && (
						<div className={`${scss.modalka} ${openModal ? 'open' : ''}`}>
							<button className='closeButton' onClick={toggleModal}>
								&times;
							</button>
							<h1>Send</h1>
							<h2>Share this site with your friends</h2>
							<nav>
								<Image src={telegram} alt='telegram' />
								<Image src={whatsapp} alt='whatsapp' />
								<Image src={instagram} alt='instagram' />
							</nav>
						</div>
					)}
				</div>
			</div>
		</section>
	)
}

export default ContactSection
