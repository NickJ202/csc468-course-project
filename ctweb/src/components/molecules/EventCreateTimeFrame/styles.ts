import styled from "styled-components";

import * as SC from "../../../styling-config";

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`;

export const FlexContainer = styled.div`
  display: flex;
  margin-top: 20px;
  @media (max-width: ${SC.STYLING.cutoffSecondary}) {
    flex-direction: column;
  }
`;

export const Fields = styled.div`
  width: 30%;
  @media (max-width: ${SC.STYLING.cutoffSecondary}) {
    width: 100%;
  }
`;

export const CalendarContainer = styled.div`
  width: 70%;
  @media (max-width: ${SC.STYLING.cutoffSecondary}) {
    width: 100%;
  }
`;

export const Calendar = styled.div`
  width: 450px;
  margin: 0 0 0 auto;
  @media (max-width: ${SC.STYLING.cutoffSecondary}) {
    width: 100%;
    margin: auto;
  }

  .react-calendar {
    width: 100%;
    background: transparent;
    line-height: 1.125em;
  }
  .react-calendar--doubleView .react-calendar__viewContainer {
    display: flex;
    margin: -0.5em;
  }
  .react-calendar--doubleView .react-calendar__viewContainer > * {
    width: 50%;
    margin: 0.5em;
  }
  .react-calendar,
  .react-calendar *,
  .react-calendar *:before,
  .react-calendar *:after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  .react-calendar button {
    margin: 0;
    border: 0;
    outline: none;
    height: 36.5px;
  }
  .react-calendar button:enabled:hover {
    cursor: pointer;
  }
  .react-calendar__navigation {
    height: 44px;
    margin-bottom: 1em;
    display: flex;
  }
  .react-calendar__navigation button {
    background: none;
    padding: 0 20px;
  }
  .react-calendar__navigation button:enabled:hover,
  .react-calendar__navigation button:enabled:focus {
    background-color: ${(props) => props.theme.colors.container.primary.hover};
  }
  .react-calendar__navigation button[disabled] {
    background-color: ${(props) => props.theme.colors.button.primary.disabled};
  }
  .react-calendar__month-view__weekdays {
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 0.75em;
  }
  .react-calendar__month-view__weekdays__weekday {
    padding: 0.5em;
  }
  .react-calendar__month-view__weekNumbers {
    font-weight: bold;
  }
  .react-calendar__month-view__weekNumbers .react-calendar__tile {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75em;
    padding: 10px;
  }
  // .react-calendar__month-view__days__day--weekend {
  //   color: ${(props) => props.theme.colors.font.active};
  // }
  .react-calendar__month-view__days__day--neighboringMonth {
    color: ${(props) => props.theme.colors.font.primary};
  }
  .react-calendar__year-view .react-calendar__tile,
  .react-calendar__decade-view .react-calendar__tile,
  .react-calendar__century-view .react-calendar__tile {
    padding: 1em 0.5em 2em 0.5em;
  }
  .react-calendar__tile {
    max-width: 100%;
    text-align: center;
    padding: 0.75em 0.5em;
    background: none;
  }
  .react-calendar__tile:disabled {
    background-color: ${(props) => props.theme.colors.button.primary.disabled};
  }
  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
    background-color: ${(props) => props.theme.colors.container.primary.hover};
  }
  .react-calendar__tile--now {
    color: ${(props) => props.theme.colors.font.invalid};
  }
  .react-calendar__tile--now:enabled:hover,
  .react-calendar__tile--now:enabled:focus {
    color: ${(props) => props.theme.colors.font.alt.primary};
    background: ${(props) => props.theme.colors.button.primary.hover};
  }
  // .react-calendar__tile--hasActive {
  //   background: ${(props) => props.theme.colors.button.primary.hover};
  // }
  // .react-calendar__tile--hasActive:enabled:hover,
  // .react-calendar__tile--hasActive:enabled:focus {
  //   background: ${(props) => props.theme.colors.button.primary.hover};
  // }
  .react-calendar__tile--active {
    background: ${(props) => props.theme.colors.button.primary.background};
    color: ${(props) => props.theme.colors.button.primary.label};
  }
  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    background: ${(props) => props.theme.colors.button.primary.hover};
  }
  .react-calendar--selectRange .react-calendar__tile--hover {
    background-color: ${(props) => props.theme.colors.container.primary.hover};
  }
`;
