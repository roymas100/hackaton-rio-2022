import  styled  from 'styled-components'


export const MainNavbarContainer = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    width: 100%;

    padding: 12px 32px;
    position: fixed;
    bottom: 0;

    background: radial-gradient(162.46% 520.88% at 9.83% 3.6%, rgba(255, 255, 255, 0.56) 0%, rgba(217, 217, 217, 0.08) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
    background-blend-mode: overlay;

    /* Glassmorphism */
    backdrop-filter: blur(12px);

    ul {
        display: flex;
        gap: 24px;
        list-style: none;
    }

    li {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 4px;

        svg {
            height: 28px;
            width: 28px;
        }
        
        span {
            font-weight: 700;
            font-size: 12px;
            color: #727171;
            &.selected {
                color: #46E3DA
            }
        }
    }
`;

export const MainNavbarContent = styled.nav``;
