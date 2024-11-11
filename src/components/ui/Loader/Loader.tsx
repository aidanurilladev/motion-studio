// components/Loader.tsx
'use client'
import { useEffect, useState } from 'react'
import styles from './Loader.module.scss'

const Loader = () => {
	const [progress, setProgress] = useState(0)

	useEffect(() => {
		const interval = setInterval(() => {
			setProgress(prev => {
				if (prev < 100) return prev + 50
				clearInterval(interval)
				return 100
			})
		}, 100)

		// Очищаем интервал после завершения
		return () => clearInterval(interval)
	}, [])

	return (
		<div className={styles.loaderWrapper}>
			<div className={styles.loaderText}>{progress}%</div>
		</div>
	)
}

export default Loader
