import React, { useState, useEffect } from 'react';
import EpisodeCard from './EpisodeCard';
import { getAllEpisodes } from '../../helper/featured/index.js';
import ShowInfo from './ShowInfo';
import Skeleton from 'react-loading-skeleton';

export default function ShowAllEpisodes() {
  const [episodes, setEpisodes] = useState([]);
  const [showData, setShowData] = useState();
  const [loading, setLoading] = useState(true);

  const preload = () => {
    getAllEpisodes().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setShowData(data.show);
        setEpisodes(data.episodes);
        setLoading(false);
      }
    });
  };

  useEffect(() => {
    preload();
  }, []);

  return (
    <div className="mainContainer">
      {!loading ? (
        <>
          <ShowInfo showData={showData} />
          <h2>Episodes</h2>
          <section className="episode-gallery">
            {episodes.map((episode) => {
              return (
                <EpisodeCard
                  key={episode.uid}
                  episodeData={episode}
                ></EpisodeCard>
              );
            })}
          </section>
        </>
      ) : (
        <div>
          <div className="skeleton-container">
            <Skeleton height={419} width={342} />
            <Skeleton count={5} />
          </div>
        </div>
      )}
    </div>
  );
}
