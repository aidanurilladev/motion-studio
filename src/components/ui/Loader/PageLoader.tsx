// components/ui/Loader/PageLoader.tsx
'use client'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Loader from './Loader' // Импортируем Loader

const PageLoader = () => {
	const [loading, setLoading] = useState(true)
	const router = useRouter()

	useEffect(() => {
		// Слушаем события изменения маршрута
		const handleRouteChangeStart = () => setLoading(true)
		const handleRouteChangeComplete = () => setLoading(false)

		// Устанавливаем слушатели на события маршрута
		router.events.on('routeChangeStart', handleRouteChangeStart)
		router.events.on('routeChangeComplete', handleRouteChangeComplete)
		router.events.on('routeChangeError', handleRouteChangeComplete) // В случае ошибки

		return () => {
			// Удаляем слушатели при размонтировании компонента
			router.events.off('routeChangeStart', handleRouteChangeStart)
			router.events.off('routeChangeComplete', handleRouteChangeComplete)
			router.events.off('routeChangeError', handleRouteChangeComplete)
		}
	}, [router])

	return loading ? <Loader /> : null // Показываем загрузчик, если страница в процессе загрузки
}

export default PageLoader
