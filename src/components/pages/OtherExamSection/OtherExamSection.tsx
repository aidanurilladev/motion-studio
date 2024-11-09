import Other from '@/assets/img/OtherExam.png'
import Image from 'next/image'
import Link from 'next/link'
import scss from './OtherExamSection.module.scss'
const OtherExamSection = () => {
	return (
		<section className={scss.OtherExam}>
			<div className='container'>
				<div className={scss.content}>
					<h1>Other exams</h1>

					<Image className={scss.photos} src={Other} alt='Other' />

					<h2>Paper Exams –Third party</h2>
					<p>
						Our office is also willing to proctor paper exams on behalf of other
						schools or private institutions. Please keep the following in mind:
					</p>
					<ul>
						<li className={scss.active}>
							Send over any proctor agreements as quickly as possible to avoid
							delays. You can e-mail us at:
						</li>
						<li className={scss.active}>
							When scheduling an exam, please allow time for the exam to be
							mailed to us.
						</li>
						<li className={scss.active}>
							Some schools & institutions require the client (you) to pay for
							return shipping. Please bring an envelope & postage for us to use.
						</li>
						<li className={scss.active}>
							Consider the time needed to mail the exam (each way) and grade the
							exam when scheduling appointments on tight deadlines
						</li>
					</ul>

					<h2>ID Requirements</h2>
					<ul>
						<li className={scss.active}>
							Each school & institution is different, consequently ID
							requirements are set by the school we proctor for. We encourage
							you to reach out to your program to find out what form of ID you
							need.
						</li>
					</ul>

					<h2>Frequently Asked Questions</h2>
					<ul>
						<li>
							<span>Where can I park?</span>
						</li>
						<li>
							Parking information including instructions on how to pay for
							parking can be found{' '}
							<Link
								href='https://studentaffairs.unt.edu/testing-services/parking'
								target='_blank'
							>
								[Here]
							</Link>
							.
						</li>
						<li>
							<span>What do I need to bring?</span>
						</li>
						<li>
							You will need to bring proper identification (see above) and a
							good attitude! A small snack or water is also encouraged. We will
							have everything else you will need to take the test.
						</li>
						<li>
							<span>How long is the exam?</span>
						</li>
						<li>
							The exam time is dependent on the exam itself. Every exam we do
							for others' schools is different and a UT High School test is
							certainly different from the University of Buffalo.
						</li>
						<li>
							<span>
								Where will I store my personal belongings during the test?
							</span>
						</li>
						<li>
							You will be provided a secure locker for your personal belongings
							before testing begins
						</li>
					</ul>
				</div>
			</div>
		</section>
	)
}

export default OtherExamSection
