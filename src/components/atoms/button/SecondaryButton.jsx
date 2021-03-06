import styled from "styled-components";

import { BaseButton } from "./BaseButton";

export const SecondaryButton = (props) => {
  const { children, onClick } = props;
  return <SButton onClick={onClick}>{children}</SButton>;
};

// 共通部分のBaseButtonのスタイルを使用する時は、styled(BaseButton)を使用する
const SButton = styled(BaseButton)`
  background-color: #11999e;
`;
