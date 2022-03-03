import styled from "styled-components";

import {IStyleProps} from "../../../types";

export const Wrapper = styled.div`
  display: flex;
`;

export const Flex = styled.div`
  display: flex;
`;

export const Step = styled.div<IStyleProps>`
  height: 30px;
  width: 30px;
  margin: 0 auto;
  border: 2px solid ${props => props.active || props.completed ?
          props.theme.colors.border.active : props.theme.colors.border.primary};
  background: ${props => props.completed ?
          props.theme.colors.border.active : props.theme.colors.transparent};
  border-radius: 50%;
  position: relative;
`;

export const Info = styled.span`
  font-size: ${props => props.theme.typography.size.xSmall};
  line-height: ${props => props.theme.typography.size.xSmall};
  display: inline-block;
  width: 100%;
  text-align: center;
`;

export const StepInfo = styled(Info)<IStyleProps>`
  font-size: ${props => props.theme.typography.size.small};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${props => props.completed ?
          props.theme.colors.font.alt.primary : props.active ?
                  props.theme.colors.font.secondary : props.theme.colors.border.primary};
`;

export const Separator = styled.div`
  height: 1px;
  width: 75px;
  margin: 15px 7.5px 0 7.5px;
  border-top: 2px solid ${props => props.theme.colors.border.primary};
`;