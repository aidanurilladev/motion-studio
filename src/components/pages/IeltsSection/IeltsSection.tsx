import IELTS from '@/assets/img/IeltsImage.png'
import Image from 'next/image'
import scss from './IeltsSection.module.scss'
const IeltsSection = () => {
	return (
		<section className={scss.AptisSection}>
			<div className='container'>
				<div className={scss.content}>
					<h1>What is IELTS?</h1>
					<Image className={scss.photos} src={IELTS} alt='Aptis Photo' />
					<h2>What Is APTIST ? A Complete Introduction</h2>
					<p>
						Introduced in 1989, IELTS, the International English Language
						Testing System, is an English language proficiency test
						internationally recognized for testing English language ability in
						four categories:
					</p>
					<ul style={{ gap: '10px' }}>
						<li>Listening</li>
						<li>Reading</li>
						<li>Writing</li>
						<li>Speaking</li>
					</ul>
					<h2>Types Of IELTS test</h2>
					<p>
						Anyone can take the IELTS test irrespective of age, gender, race,
						nationality or religion. IELTS administrators (IDP or British
						Council) has set no age limit to take the IELTS test. This is one of
						the IELTS advantages. However, for candidates below 16 years, it is
						not recommended. Although if they wish, they can also take the test.
						Anyone who wishes to pursue higher studies abroad or work abroad can
						attempt the IELTS exam (Academic and General Training). However,
						candidates should always check the educational institution’s
						eligibility criteria or organization where they are applying.
					</p>
					<ul
						style={{
							marginTop: '50px',
							gap: '25px',
						}}
					>
						<li>
							Reliable Experts: Developed by Cambridge Experts And Well
							Supported By A Strong Research And Development Team, IELTS Is The
							Most Trusted Name For The English Efficiency Test.{' '}
						</li>
						<li>
							Frequency of Test: Due to the tests’ easy availability, it is the
							most convenient for test-takers. It is available up to 4 dates a
							month.
						</li>
						<li>
							Accepted by Most Organizations: More than 10,000 organizations
							globally trust IELTS and accept the score to validate language
							proficiency. accepted by over 8,000 universities, employers and
							immigration organizations worldwide
						</li>
						<li>
							Face to Face Testing: It is known to be the fairest of all tests
							and is the only one that includes a face-to-face interaction.
						</li>
					</ul>
				</div>
			</div>
		</section>
	)
}

export default IeltsSection
