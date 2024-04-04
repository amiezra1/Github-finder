import React from 'react';
import propTypes from 'prop-types';

const Useritem = ({ user: { login, avatar_url, htmk_url } }) => {
  return (
    <div className='card text-center'>
      <img
        src={avatar_url}
        alt=''
        className='round-img'
        style={{ width: '60px' }}
      />
      <h3>{login}</h3>
      <div>
        <a href={htmk_url} className='btn btn-dark btn-sm my-1'>
          More
        </a>
      </div>
    </div>
  );
};
Useritem.prototype = {
  user: propTypes.object.isRequired,
};
export default Useritem;
