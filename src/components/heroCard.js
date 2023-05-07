import '../css/cards.css'
const HeroCard = (props) => {
  return (
    <div onClick={() => props.onClick()} className="card">
      <div >{props.children}</div>
    </div>
  );
};
export default HeroCard;
