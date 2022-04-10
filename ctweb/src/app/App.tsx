import { Root } from "../root";
import { useSelector } from "react-redux";

import { RootState } from "../redux/store";

export default function App() {
  const authData = useSelector(
    (state: RootState) => state.authReducer
  );
  return (
    <>
      <Root authenticated={authData.token} />
    </>
  );
}
