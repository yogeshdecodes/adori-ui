import React from 'react';
import { msToTime, formatDate } from '../../helper/featured/timestamp.js';

export default function EpisodeCard({ episodeData }) {
  const timestamp = msToTime(episodeData.durationMillis);
  const rawDate = new Date(episodeData.publishedOn);
  const publishDate = formatDate(rawDate);
  const shareLink = `https://shows.listenboise.com/show/not-the-way-i-planned-R9A8Hsu1AaBpWYdN/episode/+${episodeData.slug}`;
  return (
    <>
      <p>{episodeData.name}</p>
      <p>{timestamp}</p>
      <p>{publishDate}</p>
    </>
  );
}
