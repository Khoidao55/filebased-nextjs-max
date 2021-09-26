import React from 'react';
import EventItem from '../EventItem/EventItem';

interface Props {
  events: {
    title: string,
    description: string,
    location: string,
    date: string,
    image: string,
    id: string
  }[],
}

const EventList: React.FC<Props> = ({ events }) => {
  return (
    <ul>
      {events.map(event => (
        <EventItem
          key={event.id}
          title={event.title}
          description={event.description}
          location={event.location}
          date={event.date}
          image={event.image}
          id={event.id}
        />
      ))}
    </ul>
  )
}

export default EventList;