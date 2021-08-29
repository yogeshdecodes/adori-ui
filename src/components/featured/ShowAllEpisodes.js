import React, { useState, useEffect } from 'react';
import EpisodeCard from './EpisodeCard';
import { getAllEpisodes } from '../../helper/featured/index.js';

export default function ShowAllEpisodes() {
  const [episodes, setEpisodes] = useState([]);

  const preload = () => {
    getAllEpisodes().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setEpisodes(data.episodes);
      }
    });
  };

  useEffect(() => {
    preload();
  }, []);

  return (
    <div>
      {episodes.map((episode, index) => {
        return (
          <EpisodeCard key={episode.uid} episodeData={episode}></EpisodeCard>
        );
      })}
    </div>
  );
}
