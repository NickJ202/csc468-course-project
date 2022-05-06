import * as S from "./styles";
import { IProps } from "./types";

export default function InformationLine(props: IProps) {
    return (
        <S.ILContainer>
            <S.Label>
                {props.label}
            </S.Label>
            {props.data &&
            <S.FlexRow>
                <S.Colon>
                    :&nbsp;
                </S.Colon>
                <S.Data>
                    {typeof props.data === 'number' ? "(" + props.data + ")" : props.data}
                </S.Data>
            </S.FlexRow>
            }
            {props.endText &&
            <S.EndText>
                &nbsp; {props.endText}
            </S.EndText>
            }
        </S.ILContainer>
    );
}