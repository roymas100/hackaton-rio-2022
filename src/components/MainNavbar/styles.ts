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

    background-color:#212121;


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
