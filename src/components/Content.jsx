import styled from "styled-components";
import { flexMixin, yellowGreen, gray } from "../style.js";

const ContentContainer = styled.div`
  ${flexMixin(`column`, undefined, `flex-start`, `5px`)};

  img {
    width: 300px;
    border-radius: 10px;
    margin-bottom: 3px;
    min-height: 225px;
  }

  span {
    font-size: 12px;
    color: ${yellowGreen};
    border: 1px solid ${yellowGreen};
    padding: 4px 5px;
    border-radius: 3px;
  }

  div {
  font-size: 18px;
  font-weight: 600;
  }

  p {
  font-size: 12px;
    color: ${gray};
  }
`

export default function Content({ content }) {
  return (
    <ContentContainer >
      <img src={content.img} alt={content.title} />
      <span>모집중</span>
      <div>{content.title}</div>
      <p>{content.subtitle}</p>
    </ContentContainer>
  );
}
