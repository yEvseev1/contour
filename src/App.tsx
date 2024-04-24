import { Maximize } from 'lucide-react'
import { useState } from 'react'
import { Map, YMaps } from 'react-yandex-maps'
import './App.css'
import Events from './components/events/events'
function App() {
	const [size, setSize] = useState<string>('medium')

	return (
		<div>
			<div>
				<div
					className={`${
						size == 'medium'
							? 'camera-container-medium'
							: 'camera-container-large'
					}`}
				>
					<div className='camera-blocks'>
						<div className='camera'>КАМЕРА</div>
						<span
							className='resize'
							onClick={() =>
								setSize(prev => (prev === 'medium' ? ' large' : 'medium'))
							}
						>
							<Maximize className='resize-icon' />
						</span>
					</div>
					<div className='input-area'>
						<div className='input-block'>
							<label htmlFor='thread'>Введите ключ потока:</label>
							<input
								type='text'
								name='keyInput'
								id='thread'
								className='input'
								placeholder='Ваш ключ...'
							/>
						</div>
					</div>
				</div>
				<Events />
			</div>
			<YMaps>
				<Map
					defaultState={{ center: [55.75, 37.57], zoom: 9 }}
					className='map'
				/>
			</YMaps>
		</div>
	)
}

export default App
