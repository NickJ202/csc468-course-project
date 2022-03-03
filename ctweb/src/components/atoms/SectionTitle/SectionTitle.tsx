import * as S from "./styles";
import {IProps} from "./types";

export default function SectionTitle(props: IProps) {
    return (
        <S.SectionTitle>
            {props.header}
        </S.SectionTitle>
    )
} 