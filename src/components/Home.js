import React from 'react';
import './Home.css';
import Banner from './Banner';
import Card from './Card';
import house1 from '../assets/house1.jfif';
import house2 from '../assets/2.jfif';
import house3 from '../assets/3.jfif';

function Home() {
  console.log("Home component rendered"); // Debugging statement

  return (
    <div className="home">
      <Banner />
      <div className="home__section">
        <Card
          src={house1}
          title="Title 1"
          description="Description 1"
          price="$100"
        />
        <Card
          src={house2}
          title="Title 2"
          description="Description 2"
          price="$200"
        />
        <Card
          src={house3}
          title="Title 3"
          description="Description 3"
          price="$300"
        />
      </div>
    </div>
  );
}

export default Home;



