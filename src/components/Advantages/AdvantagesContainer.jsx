import {connect} from "react-redux";
import Advantages from "./Advantages";

const stateToProps = (state) => {
    return {
        advantages: state.user.advantages,
    }
};

const AdvantagesContainer = connect(stateToProps, null)(Advantages);

export default AdvantagesContainer;