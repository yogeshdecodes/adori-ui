import React from 'react';
import { msToTime, formatDate } from '../../helper/featured/timestamp.js';

export default function EpisodeCard({ episodeData }) {
  const timestamp = msToTime(episodeData.durationMillis);
  const rawDate = new Date(episodeData.publishedOn);
  const publishDate = formatDate(rawDate);
  const podcastImage = episodeData.image.urls.full;
  const shareLink = `https://shows.listenboise.com/show/not-the-way-i-planned-R9A8Hsu1AaBpWYdN/episode/+${episodeData.slug}`;
  return (
    <div className="episode-container">
      <div>
        <img alt="episode" width="100%" src={podcastImage}></img>
      </div>

      <div className="showCardMetaData  ">
        <div className="play-container">
          <div className="play-icon">
            <a className="" href="/">
              <i className="fas fa-play"></i>
            </a>
          </div>
          <div className="namedate-main-container">
            <h3>
              <a href="/">{episodeData.name}</a>
            </h3>
            <div className="timedate-container">
              <span>{timestamp} · </span>
              <span>{publishDate}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
