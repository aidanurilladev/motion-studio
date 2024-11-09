import ExamPhoto1 from '@/assets/img/Examphoto1.png'
import BoxPhoto1 from '@/assets/img/ExamPhoto2.png'
import BoxPhoto2 from '@/assets/img/ExamPhoto3.png'
import BoxPhoto3 from '@/assets/img/ExamPhoto4.png'
import Image from 'next/image'
import Link from 'next/link'
import scss from './ExamSection.module.scss'

const ExamSection = () => {
	return (
		<section className={scss.Exams}>
			<div className='container'>
				<div className={scss.content}>
					<div className={scss.contentText}>
						<h1 className='title'>Exams</h1>
						<p>
							Exams are tests that assess a person's knowledge, skills,
							aptitude, or other qualifications in a specific subject or area of
							study. They are used to evaluate academic performance.
						</p>
					</div>
					<div className={scss.blocks}>
						<div className={scss.block}>
							<Image
								src={ExamPhoto1}
								width={466}
								height={327}
								alt='English Exams'
							/>
							<Link className={scss.cambrige} href='#'>
								Cambrige English Exams
							</Link>
							<h2>Your path to learning English, step by step.</h2>
							<p>
								Cambridge English Qualifications are in-depth exams that make
								learning English enjoyable, effective and rewarding. Our
								qualifications are based on research into effective teaching and
								learning.
							</p>
							<button>
								<Link href='/exams/cambrige-exam'>Discover more</Link>
							</button>
						</div>
						<div className={scss.boxes}>
							<div className={scss.box}>
								<Link
									href='/exams/aptis'
									style={{
										position: 'absolute',
										width: '100%',
										height: '100%',
									}}
								></Link>
								<div>
									<Image
										src={BoxPhoto1}
										alt='Aptis Photo'
										width={189}
										height={132}
									/>
								</div>

								<div className={scss.boxContent}>
									<div className={scss.Aptis}>
										<span>Aptis</span>
									</div>
									<h2>Choose Aptis for your assessment needs</h2>
									<p>
										Aptis is a computer basedtest which provides fast results
										reliably marked by our exsaminest.
									</p>
								</div>
							</div>

							<div className={scss.box}>
								<Link
									href='/exams/ielts'
									style={{
										position: 'absolute',
										width: '100%',
										height: '100%',
									}}
								></Link>
								<Image
									src={BoxPhoto2}
									alt='Aptis Photo'
									width={189}
									height={132}
								/>

								<div className={scss.boxContent}>
									<div className={scss.Aptis}>
										<span>IELTS</span>
									</div>
									<h2>Here’s all you need to know about IELTS</h2>
									<p>
										IELTS (the International English Language Testing is the
										world’s most popular.
									</p>
								</div>
							</div>

							<div className={scss.box}>
								<Link
									href='/exams/other-exam'
									style={{
										position: 'absolute',
										width: '100%',
										height: '100%',
									}}
								></Link>
								<Image
									src={BoxPhoto3}
									alt='Aptis Photo'
									width={189}
									height={132}
								/>

								<div className={scss.boxContent}>
									<div
										style={{
											width: '107px',
										}}
										className={scss.Aptis}
									>
										<span>Other Exams</span>
									</div>
									<h2>There are a variety of competitive exams besides.</h2>
									<p>
										But covering them is no big deal. Just study ncert books for
										these.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ExamSection
