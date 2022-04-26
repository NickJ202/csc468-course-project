import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { storePartialEvent } from "../../../redux/events/actions";
import { RootState } from "../../../redux/store";

import * as S from "./styles";
import * as CF from "../../../config";
import { language } from "../../../language";
import { SectionTitle } from "../../atoms/SectionTitle";
import { FormField } from "../../atoms/FormField";

export default function EventCreateLocation() {
  const dispatch = useDispatch();
  const eventCreateData = useSelector(
    (state: RootState) => state.eventCreateReducer
  );
  
  const fields = CF.CREATE.address.fields;

  const [address, setAddress] = React.useState<string>(eventCreateData.address1 || "");
  const [city, setCity] = React.useState<string>(eventCreateData.locality || "");
  const [state, _setState] = React.useState<string>(eventCreateData.administrativeArea || "");
  const [postalCode, setPostalCode] = React.useState<string>(eventCreateData.postalCode || "");
  const [country, setCountry] = React.useState<string>(eventCreateData.country || "");

  React.useEffect(() => {
    dispatch(
      storePartialEvent({
        address1: address,
        locality: city,
        administrativeArea: state,
        postalCode: postalCode,
        country: country
      })
    );
  }, [address, city, state, postalCode, country, dispatch]);

  return (
    <S.Wrapper>
      <SectionTitle header={language.location.header} />
      <S.FlexContainer>
        <S.FullField>
          <FormField
            label={fields[0].label}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </S.FullField>
        <S.RowContainer>
          <S.HalfField>
            <FormField
              label={fields[1].label}
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </S.HalfField>
          <S.HalfField>
            <FormField
              label={fields[2].label}
              value={state}
              onChange={(e) => _setState(e.target.value)}
            />
          </S.HalfField>
        </S.RowContainer>
        <S.RowContainer>
          <S.HalfField>
            <FormField
              label={fields[3].label}
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
            />
          </S.HalfField>
          <S.HalfField>
            <FormField
              label={fields[4].label}
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </S.HalfField>
        </S.RowContainer>
      </S.FlexContainer>
    </S.Wrapper>
  );
}
