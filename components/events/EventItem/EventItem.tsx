import React from 'react';
import Link from 'next/link';
import classes from './EventItem.module.css';

interface Props {
  title: string,
  description: string,
  location: string,
  date: string,
  image: string,
  id: string
}

const EventItem: React.FC<Props> = ({title, description, location, date, image, id }) => {
  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
  const formattedAddress = location.replace(', ', '\n');
  const exploreLink = `/events/${id}`;

  return (
    <li>
      <img src={'/' + image} alt={title} />
      <div>
        <div>
          <h2>{title}</h2>
          <div>
            <time>{humanReadableDate}</time>
          </div>
          <div>
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div>
          <Link href={exploreLink}>Explore Events</Link>
        </div>
      </div>
    </li>
  )
}

export default EventItem;