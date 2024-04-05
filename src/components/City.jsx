import {If,Then} from 'react-if';

function City(props) {

  props.location.name= "This is my city";

  return (

    <>
    <If condition={props.location.name}>
      <Then>
        <h2>{props.location.name}</h2>
      </Then>
    </If>
    </>
  );
}

export default City;