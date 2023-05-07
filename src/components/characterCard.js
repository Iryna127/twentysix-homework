import '../css/oneCard.css';

const CharacterCard = ({ heroIndex, heroLists }) => {
  console.log(heroLists);
  console.log(heroIndex);
  const { name, image, gender, location, species, status } = heroLists;

  return (
    <>
      <div className="profile-wrapper">
        <div className="profile-left">
          <h1>{name}</h1>
          <div className="profile__image">
            <img className='profile__image' src={image} alt={name} />
          </div>
        </div>
        <div className="profile-right">
          <ul>
            <li>
              <strong>Name:</strong>
              {name}
            </li>
            <li>
              <strong>Status:</strong>
              {status}
            </li>
            <li>
              <strong>Gender:</strong>
              {gender}
            </li>
            <li>
              <strong>Species:</strong>
              {species}
            </li>
            <li>
              <strong>Location</strong>
              {location?.name}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default CharacterCard;
