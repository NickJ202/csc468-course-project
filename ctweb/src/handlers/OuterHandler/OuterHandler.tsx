import React from "react";

import { IProps } from "./types";
import * as S from "./styles";

import { RefType } from "../../types";

function useOuterHandler(ref: RefType, func: () => void) {
  React.useEffect(() => {
    function handleActionOutside(
      event: React.MouseEvent<HTMLInputElement>,
      func: () => void
    ) {
      if (
        (ref as RefType).current &&
        !(ref as RefType).current.contains(event.target as any)
      ) {
        func();
      }
    }
    document.addEventListener("mousedown", (e) =>
      handleActionOutside(e as any, func)
    );
    return () => {
      document.removeEventListener("mousedown", (e) =>
        handleActionOutside(e as any, func)
      );
    };
  }, [ref, func]);
}

export default function OuterHandler(props: IProps) {
  const wrapperRef = React.useRef<any>(null);
  useOuterHandler(wrapperRef, props.handler);
  if (props.active) {
    return <S.Wrapper ref={wrapperRef}>{props.children}</S.Wrapper>;
  } else {
    return <S.Wrapper>{props.children}</S.Wrapper>;
  }
}
