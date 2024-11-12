import play from '@/assets/img/YouTubePlay.png'
import VideoModals from '@/components/ui/VideoModals/VideoModals'
import Image from 'next/image'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import scss from './VideoSection.module.scss'

const VideoSection = () => {
	const { t } = useTranslation()
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [selectedVideoId, setSelectedVideoId] = useState('')

	// Открытие модалки с видео
	const openModal = videoId => {
		setSelectedVideoId(videoId)
		setIsModalOpen(true)
	}

	// Закрытие модалки
	const closeModal = () => {
		setIsModalOpen(false)
	}

	return (
		<section className={scss.VideoSection}>
			<div className='container'>
				<div className={scss.content}>
					<h1>{t('videoTestimonialsTitle')}</h1>
					<div className={scss.videoWrapper}>
						<div className={scss.videoScroll}>
							{/* Список видео */}
							{['lWz-46NPqdk', 'lWz-46NPqdk', 'lWz-46NPqdk', 'lWz-46NPqdk'].map(
								(videoId, index) => (
									<div
										key={index}
										className={scss.videoItem}
										onClick={() => openModal(videoId)}
									>
										{/* Превью видео (например, с YouTube) */}
										<img
											src={`https://img.youtube.com/vi/${videoId}/0.jpg`}
											alt={`Video thumbnail ${index + 1}`}
											className={scss.videoThumbnail}
										/>
										{/* Можно добавить иконку play */}
										<div className={scss.playButton}>
											<Image src={play} alt='play' />
										</div>
									</div>
								)
							)}
						</div>
					</div>
				</div>
			</div>

			{/* Модалка */}
			{isModalOpen && (
				<VideoModals videoId={selectedVideoId} onClose={closeModal} />
			)}
		</section>
	)
}

export default VideoSection
