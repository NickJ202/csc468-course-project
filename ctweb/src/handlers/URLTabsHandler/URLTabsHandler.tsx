import React from "react";
import { useHistory, useParams } from "react-router-dom";

import { NotFound } from "../../views/notFound";

import * as S from "./styles";
import { ITProps, ICProps, IUProps } from "./types";

function Tab(props: ITProps) {
  function handleClick() {
    props.onClick(props.url);
  }

  return (
    <S.Tab active={props.active} onClick={handleClick}>
      {props.label}
    </S.Tab>
  );
}

function TabContent(props: ICProps) {
  const { active } = useParams() as { active: string };
  let TabView: React.ComponentType = NotFound;
  for (let i = 0; i < props.tabs.length; i++) {
    if (props.tabs[i].url.includes(active)) {
      TabView = props.tabs[i].view;
    }
  }
  return (
    <S.View>
      <TabView />
    </S.View>
  );
}

export default function URLTabsHandler(props: IUProps) {
  const { active } = useParams() as { active: string };

  const history = useHistory();

  React.useEffect(() => {
    if (!active) {
      history.push(props.activeUrl);
    }
  }, [active, history, props.activeUrl]);

  const handleRedirect = (url: string) => {
    if (active !== url) {
      history.push(url);
    }
  };

  return (
    <S.Container>
      <S.List>
        {props.tabs.map((elem, index) => {
          return (
            <Tab
              key={index}
              url={elem.url}
              label={elem.label}
              active={elem.url.includes(active)}
              onClick={() => handleRedirect(elem.url)}
            />
          );
        })}
      </S.List>
      <S.Content>
        <TabContent tabs={props.tabs} />
      </S.Content>
    </S.Container>
  );
}
