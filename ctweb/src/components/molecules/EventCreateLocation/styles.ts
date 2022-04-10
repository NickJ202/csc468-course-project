import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`;

export const Table = styled.table`
  display: flex;
  border-collapse: collapse;
  min-width: 100%;
`;

export const Column = styled.div`
  float: left;
  width: 50%;
`;

export const PColumn = styled(Column)`
  padding-left: 10px;
`;

export const FlexContainer = styled.div`
  display: flex;
  margin-top: 20px;
  flex-direction: column;
`;

export const RowContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const FullField = styled.div`
  width: 100%;  
`;

export const HalfField = styled.div`
  width: 47.5%;
`;
