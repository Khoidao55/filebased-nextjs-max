import React from 'react';
import EventItem from '../EventItem/EventItem';
import classes from './EventList.module.css';

interface Props {
  events: {
    title: string,
    location: string,
    date: string,
    image: string,
    id: string
  }[],
}

const EventList: React.FC<Props> = ({ events }) => {
  return (
    <ul className={classes.list}>
      {events.map(event => (
        <EventItem
          key={event.id}
          title={event.title}
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