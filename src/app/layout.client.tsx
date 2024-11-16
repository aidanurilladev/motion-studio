'use client'
import Loader from '@/components/ui/Loader/Loader'
import i18n from '@/i18n'
import { ReduxProvider } from '@/providers/ReduxProvider'
import { FC, ReactNode, useEffect, useState } from 'react'
import { I18nextProvider } from 'react-i18next'
interface LayoutProps {
	children: ReactNode
}

const LayoutClient: FC<LayoutProps> = ({ children }) => {
	const [loading, setLoading] = useState<boolean>(false)
	useEffect(() => {
		const handleStart = () => setLoading(true)
		const handleComplete = () => setLoading(false)

		window.addEventListener('beforeunload', handleStart)
		window.addEventListener('load', handleComplete)

		return () => {
			window.removeEventListener('beforeunload', handleStart)
			window.removeEventListener('load', handleComplete)
		}
	}, [])
	return (
		<I18nextProvider i18n={i18n}>
			<ReduxProvider>
				{loading && <Loader />}
				{children}
			</ReduxProvider>
		</I18nextProvider>
	)
}

export default LayoutClient
