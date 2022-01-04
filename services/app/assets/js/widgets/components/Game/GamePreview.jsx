import React, { memo } from 'react';
import Gon from 'gon';
import LanguageIcon from '../LanguageIcon';

const GamePreview = () => {
  const players = Gon.getAsset('players');
  const defaultPlayer = {
    name: 'John Doe',
    github_id: 35539033,
    lang: 'js',
    rating: '0',
  };
  const player1 = players[0] || defaultPlayer;
  const player2 = players[1] || defaultPlayer;

  return (
    <div className="preview container-fluid slideInLeft">
      <div className="preview__container w-100 d-flex align-items-center">
        <div className="player1">
          <img src={`https://avatars0.githubusercontent.com/u/${player1.github_id}`} alt="avatar" className="player1__avatar" />
          <p className="player1__name">{player1.name}</p>
          <div className="player1__status">
            <LanguageIcon className="preview__icon" lang={player1.lang} />
            <span className="preview__info">{player1.lang}</span>
            <img className="preview__icon" src="/assets/images/rating.svg" alt="rating" />
            <span className="preview__info">{player1.rating}</span>
          </div>
        </div>

        <div className="preview__middle">
          <img src="/assets/images/fight.svg" alt="fight" className="preview__fight" />
        </div>

        <div className="player2">
          <img src={`https://avatars0.githubusercontent.com/u/${player2.github_id}`} alt="avatar" className="player2__avatar" />
          <p className="player2__name">{player2.name}</p>
          <div className="player2__status">
            <LanguageIcon className="preview__icon" lang={player2.lang} />
            <span className="preview__info">{player2.lang}</span>
            <img className="preview__icon" src="/assets/images/rating.svg" alt="rating" />
            <span className="preview__info">{player2.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(GamePreview);
