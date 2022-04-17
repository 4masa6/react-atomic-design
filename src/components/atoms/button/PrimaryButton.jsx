import styled from "styled-components";

import { BaseButton } from "./BaseButton";

export const PrimaryButton = (props) => {
  const { children } = props;
  return <SButton>{children}</SButton>;
};

// 共通部分のBaseButtonのスタイルを使用する時は、styled(BaseButton)を使用する
const SButton = styled(BaseButton)`
  background-color: #40514e;
`;
