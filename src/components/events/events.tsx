import {eventsList} from './events.data'

export default function Events() {
  return (
    <div className='events'>
      <div className='events-container'>
        <h2>События</h2>
        <hr className='separator'/>
        <ul className='list'>
          {eventsList.map((item, index) => (
            <div key={index} className='event-item'>
              <div className='event-item-header'>
                <div>{item.location}</div>
                <div>{item.time}</div>
              </div>
              <div className='event-item-content'>{item.eventContent}</div>
              <div className='event-item-footer'>
                <button className='event-item-button'>
                  Показать нарушение
                </button>
                <div>{item.eventType}</div>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  )
}
