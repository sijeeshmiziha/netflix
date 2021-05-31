import React from 'react';
import { useHistory } from 'react-router-dom';
import './ProfilePage.css';

const AVATAR_URL =
  'https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png';

function ProfilePage() {
  const history = useHistory();
  const profiles = [
    { id: '1', name: 'User 1', avatar: AVATAR_URL },
    { id: '2', name: 'User 2', avatar: AVATAR_URL },
    { id: '3', name: 'Kids', avatar: AVATAR_URL },
    { id: '4', name: 'Guest', avatar: AVATAR_URL },
  ];

  return (
    <div className="profileScreen">
      <header className="profileScreen__header">
        <img
          className="profileScreen__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
          alt="Netflix"
        />
      </header>
      <h1 className="profileScreen__title">Who&apos;s watching?</h1>
      <div className="profileScreen__profiles">
        {profiles.map((profile) => (
          <button
            type="button"
            key={profile.id}
            className="profileScreen__profile"
            onClick={() => history.push('/browse')}
          >
            <img src={profile.avatar} alt={profile.name} />
            <span>{profile.name}</span>
          </button>
        ))}
        <div
          className="profileScreen__profile profileScreen__addProfile"
          aria-label="Add Profile"
        >
          <span className="profileScreen__addIcon">+</span>
          <span>Add Profile</span>
        </div>
      </div>
      <button type="button" className="profileScreen__manageBtn">
        Manage Profiles
      </button>
    </div>
  );
}

export default ProfilePage;
