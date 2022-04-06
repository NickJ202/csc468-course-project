import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { FormField } from "../../atoms/FormField";
import { TextArea } from "../../atoms/TextArea";
import { SectionTitle } from "../../atoms/SectionTitle";

import { storePartialEvent } from "../../../redux/events/actions";

import * as S from "./styles";

import { language } from "../../../language";

import { RootState } from "../../../redux/store";

export default function EventCreateBasicInfo() {
  const dispatch = useDispatch();
  const eventCreateData = useSelector(
    (state: RootState) => state.eventCreateReducer
  );
  const [title, setTitle] = React.useState<string>(eventCreateData.title || "");
  const [description, setDescription] = React.useState<string>(
    eventCreateData.description || ""
  );

  React.useEffect(() => {
    dispatch(
      storePartialEvent({
        title: title,
        description: description,
      })
    );
  }, [title, description, dispatch]);

  return (
    <S.Wrapper>
      <SectionTitle header={language.basicInfo.header} />
      <S.FlexContainer>
        <FormField
          label={language.basicInfo.eventTitle}
          value={title}
          onChange={(e: any) => setTitle(e.target.value)}
        />
        <TextArea
          label={language.basicInfo.description}
          value={description}
          onChange={(e: any) => setDescription(e.target.value)}
        />
      </S.FlexContainer>
    </S.Wrapper>
  );
}
