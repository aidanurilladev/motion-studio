// components/Loader.tsx
import { useEffect, useState } from 'react'
import styles from './Loader.module.scss'

const Loader = () => {
	const [progress, setProgress] = useState(0)

	useEffect(() => {
		let interval: NodeJS.Timeout
		// Начинаем прогресс с 0 и увеличиваем до 100%
		if (progress < 100) {
			interval = setInterval(() => {
				setProgress(prev => Math.min(prev + 5, 100))
			}, 100)
		}

		return () => clearInterval(interval) // Очищаем интервал при размонтировании компонента
	}, [progress])

	return (
		<div className={styles.loaderWrapper}>
			<div className={styles.loader}>
				<div className={styles.loaderBar} style={{ width: `${progress}%` }} />
				<div className={styles.loaderText}>{progress}%</div>
			</div>
		</div>
	)
}

export default Loader
