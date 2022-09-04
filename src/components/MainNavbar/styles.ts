import  styled  from 'styled-components'


export const MainNavbarContainer = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    width: 100%;

    padding: 24px 32px;

    ul {
        display: flex;
        gap: 46px;
        list-style: none;
    }

    li {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 6px;

        svg {
            height: 32px;
            width: 32px;
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
