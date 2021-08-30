import React from 'react';
import parse from 'html-react-parser';

export default function ShowInfo({ showData }) {
  const { name, description, totalTracks } = showData;
  const podcastImageThumb = showData.image.urls.thumb;
  const podcastImageFull = showData.image.urls.full;

  return (
    <>
      <div className="show-info-grid">
        <div className="card-container">
          <img
            className="podcast-banner-image"
            loading="lazy"
            data-src={podcastImageThumb}
            alt={name}
            src={podcastImageFull}
          />
          <div className="showCardMetaData  ">
            <div className="play-container">
              <div className="play-icon">
                <a className="" href="/featured">
                  <i className="fas fa-play"></i>
                </a>
              </div>
              <h3>Play latest</h3>
            </div>
            <div className="showSubscribeButton">
              <button>Subscribe</button>
            </div>
          </div>
        </div>
        <div>
          <h2>{name}</h2>
          <span style={{ color: '#657786' }}>{totalTracks} Episodes</span>
        </div>
      </div>

      <div className="descriptionContainer">
        <h2>Description</h2>
        {parse(description)}
      </div>
    </>
  );
}
