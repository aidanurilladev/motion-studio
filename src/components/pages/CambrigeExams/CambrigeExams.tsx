import Cambridge from '@/assets/img/Cambridge.png'
import Victor from '@/assets/img/victor.png'
import Image from 'next/image'
import scss from './CambrigeExams.module.scss'
const CambridgeExams = () => {
	return (
		<section className={scss.CambridgeExams}>
			<div className='container'>
				<div className={scss.content}>
					<h1>Cambridge English Exam</h1>
					<Image
						className={scss.photos}
						src={Cambridge}
						alt='Cambridge Exams'
					/>
					<h2>Who are the Cambridge English exams for?.</h2>
					<p>
						The Cambridge English exams are strongly recommended for anyone who
						plans to work in international business or study and/or work
						overseas. Wherever life takes you, you will be able to prove your
						English level with your Cambridge Certificate
					</p>
					<h2>What do the Cambridge exams involve?</h2>
					<h3>Official recognition</h3>
					<p>
						Cambridge English Qualifications are accepted worldwide. They are a
						mark of excellence trusted by thousands of leading higher education
						institutions, governments and employers. With a Cambridge English
						Qualification, you'll open doors to a world of opportunities –
						literally!
					</p>
					<p>
						When you pass the exam, you'll be awarded a certificate delivered by
						Cambridge Assessment English, the ESOL accreditation body of the
						University of Cambridge. Each year, more than 300,000 people from
						over 100 different countries choose to sit a Cambridge exam\.
					</p>
					<p>
						<span>
							Depending on the level you are looking to achieve, you might
							choose from one of the following exam preparation courses:
						</span>
					</p>
					<div>
						<ul>
							<h4>
								<Image src={Victor} alt='Check' width={24} height={17.46} />
								<li>B2 First (FCE)</li>
							</h4>
							<h4>
								<Image src={Victor} alt='Check' width={24} height={17.46} />
								<li>C1 Advanced (CAE)</li>
							</h4>
							<h4>
								<Image src={Victor} alt='Check' width={24} height={17.46} />
								<li>C2 Proficiency (CPE)</li>
							</h4>
						</ul>
					</div>
				</div>
			</div>
		</section>
	)
}

export default CambridgeExams
