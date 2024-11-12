'use client'
import scss from './VideoModails.module.scss'

const VideoModals = ({ videoId, onClose }) => {
	return (
		<div className={scss.VideoModals} onClick={onClose}>
			<div className={scss.modalsContainer} onClick={e => e.stopPropagation()}>
				<button className={scss.closeButton} onClick={onClose}>
					×
				</button>
				<iframe
					width='800px'
					height='450px'
					src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
					title='YouTube video player'
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
					frameBorder='0'
					allowFullScreen
				></iframe>
			</div>
		</div>
	)
}

export default VideoModals
