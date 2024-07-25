import Intro from "./Intro";
import SkillList from "./skillList";
import Avatar from "./avatar";

function Card(props) {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro name={props.data.name} about={props.data.about} />
        <SkillList />
      </div>
    </div>
  );
}

export default Card;
