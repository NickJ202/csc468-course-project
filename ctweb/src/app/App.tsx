// import React from "react";
// import {useSelector} from "react-redux";

// import {RootState} from "../redux/store";

import {Root} from "../root";

// import {checkAuth} from "../auth";

// import * as S from "./styles";

export default function App() {
    // const tempState = useSelector((state: RootState) => state.tempReducer);
    // console.log(tempState)
    // const [authenticated, setAuthenticated] = React.useState(false);
    //
    // React.useEffect(() => {
    //     if (checkAuth()) {
    //         setAuthenticated(true);
    //     }
    // }, []);

    return (
        <>
            {/*{*/}
            {/*    !authenticated &&*/}
            {/*    <S.ViewWrapper/>*/}
            {/*}*/}
            <Root authenticated={true}/>
        </>
    );
}
