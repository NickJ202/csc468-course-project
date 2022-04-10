import React from "react";

import * as S from "./styles";
import * as CF from "../../../config";
import { language } from "../../../language";
import { SectionTitle } from "../../atoms/SectionTitle";
import { FormField } from "../../atoms/FormField";

export default function EventCreateLocation() {
  const fields = CF.CREATE.address.fields;

  const [address, setAddress] = React.useState<string>("");
  const [city, setCity] = React.useState<string>("");
  const [state, _setState] = React.useState<string>("");
  const [postalCode, setPostalCode] = React.useState<string>("");
  const [country, setCountry] = React.useState<string>("");

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
              label={fields[2].label}
              value={state}
              onChange={(e) => _setState(e.target.value)}
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
              label={fields[3].label}
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
            />
          </S.HalfField>
        </S.RowContainer>
      </S.FlexContainer>
    </S.Wrapper>
  );
}
