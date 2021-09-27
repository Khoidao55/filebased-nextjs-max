import type { NextPage } from 'next';
import { getFeaturedEvents } from '../dummy-data';
import EventList from '../components/events/EventList/EventList';

const HomePage: NextPage = () => {
  const featuredEvents = getFeaturedEvents();
  return (
    <div>
      <EventList events={featuredEvents} />
    </div>
  )
}

export default HomePage;