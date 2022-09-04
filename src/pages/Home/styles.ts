import styled from "styled-components";
import { ResourceType } from "../../types/ResourceType";

export const AppWrapper = styled.div<{ type: ResourceType }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;

  min-height: 100vh;
  width: 100%;

  background: var(--${({ type }) => type}-background);
`;

export const Section = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  width: 100%;

  padding: 24px 0;
  gap: 16px;
`;

export const HomeWrapper = styled.div<{ type: ResourceType }>`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;

  .padding {
    width: 100%;
    padding: 0 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  h3 {
    margin-bottom: 12px;
    font-size: 24px;
  }

  .carousel-root {
    width: 100%;
    max-height: 240px;
  }

  .react-horizontal-scrolling-menu--wrapper {
    display: flex;
    gap: 16px;
    width: 100%;
    padding: 0 24px;
  }
  .react-horizontal-scrolling-menu--inner-wrapper {
    position: relative;
  }

  .react-horizontal-scrolling-menu--scroll-container {
    /* padding: 0 48px; */
    gap: 12px;
  }

  .react-horizontal-scrolling-menu--arrow-left {
    position: absolute;
    left: 0;
    height: 100%;
    z-index: 999;
    opacity: 0.3;
  }

  .react-horizontal-scrolling-menu--arrow-right {
    z-index: 999;
    position: absolute;
    height: 100%;
    right: 0;
    opacity: 0.3;
  }
`;
