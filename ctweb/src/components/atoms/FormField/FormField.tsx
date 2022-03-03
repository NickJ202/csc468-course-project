import {IProps} from "./types";
import * as S from "./styles";

export default function FormField(props: IProps) {
    return (
        <S.Wrapper>
            <label>{props.label}</label>
            <S.Input
                value={props.value}
                onChange={props.onChange}
                disabled={false}
                invalid={false}
            />
        </S.Wrapper>
    );
}