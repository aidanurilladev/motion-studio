import BestFormSection from './HomeSections/BestFormSection'
import ContactSection from './HomeSections/ContactSection'
import ExamSection from './HomeSections/ExamSection'
import HomeSection from './HomeSections/HomeSection'
import VideSection from './HomeSections/VideSection'

const Home = () => {
	return (
		<div
			style={{
				position: 'relative',
			}}
		>
			<HomeSection />
			<BestFormSection />
			<ExamSection />
			<VideSection />
			<ContactSection />
		</div>
	)
}

export default Home
