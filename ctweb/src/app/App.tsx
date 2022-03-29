import {Root} from "../root";

export default function App() {
    return (
        <>
            {/*{*/}
            {/*    !authenticated &&*/}
            {/*    <S.ViewWrapper/>*/}
            {/*}*/}
            <Root authenticated={false}/>
        </>
    );
}