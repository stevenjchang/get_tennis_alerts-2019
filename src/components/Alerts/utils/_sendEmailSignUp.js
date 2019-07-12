import axios from 'axios';
import { LAMBDA_URI } from "../../../constants";

export const _sendEmailSignUp = (email, props) => {
  let body = {
    email,
    selectedPlayers: props.selectedPlayers.sort(),
    timeZoneLocationString: props.timeZone.timeZoneLocationString,
    timeZoneOffset: props.timeZone.timeZoneOffset
  };
  
  return axios.post(`${LAMBDA_URI}/signup`, body)
}