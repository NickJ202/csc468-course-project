import { Redirect } from "react-router-dom";

import * as U from "../../urls";

export default function SignUp() {
  return <Redirect to={U.signUpOrganization} />;
}
