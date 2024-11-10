import BestBookImage from '@/assets/img/BestBook.png'
import BestFormImage from '@/assets/img/BestForm.png'
import BestMoneyImage from '@/assets/img/BestMoney.png'
import BestPersonImage from '@/assets/img/BestPerson.png'
import BestTimeImage from '@/assets/img/BestTime.png'
import Image from 'next/image'
import scss from './BestFormSection.module.scss'
const BestFormSection = () => {
	return (
		<section className={scss.BestForm}>
			<div className='container'>
				<div className={scss.content}>
					<div className={scss.contentText}>
						<h1>This is why we are best from others</h1>
						<p>
							We provide full support at all stages of preparation, including
							assistance in filing documents and preparing for an interview.
							Contact us and start your journey to higher education abroad!
						</p>

						<Image src={BestFormImage} alt='Best from image' />
					</div>
					<div className={scss.contentBlock}>
						<div className={scss.block}>
							<Image src={BestBookImage} alt='book logo' />
							<h2>1000+ Partners</h2>
							<p>
								Over 1000+ partners worldwide enter the best universities in the
								world
							</p>
						</div>
						<div className={scss.block}>
							<Image src={BestPersonImage} alt='book logo' />
							<h2>Experts</h2>
							<p>We are experts in our field. help you reach new heights</p>
						</div>
						<div className={scss.block}>
							<Image src={BestTimeImage} alt='book logo' />
							<h2>Time</h2>
							<p>
								We will help you save your time and nerves when applying to the
								best university.
							</p>
						</div>
						<div className={scss.block}>
							<Image src={BestMoneyImage} alt='book logo' />
							<h2>Affordable prices</h2>
							<p>
								Reasonable prices will always please you. sign up for a
								consultation
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default BestFormSection
