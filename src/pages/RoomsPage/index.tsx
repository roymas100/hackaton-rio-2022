
import styled from 'styled-components'
import { useRooms } from '../../hooks/useRooms'

export default function RoomsPage() {
    const {currentRoom} = useRooms()
  return (
    <RoomPageContainer>
      <RoomPageContent>
        <div className="room-switch">
          <span className="back-button">
            <svg width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.66671 13.8333L2.33337 7.49996L8.66671 1.16663" stroke="#1E1E20" stroke-width="2.11111" stroke-linecap="round"/>
            </svg>
          </span>

              {currentRoom}

          <span className="next-button">
            <svg width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.66671 13.8333L2.33337 7.49996L8.66671 1.16663" stroke="#1E1E20" stroke-width="2.11111" stroke-linecap="round"/>
            </svg>
          </span>
        </div>
        
      </RoomPageContent>
    </RoomPageContainer>
  )
}



const RoomPageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color:  #1E1E20;
  width: 100%;
`

const RoomPageContent = styled.div`
  display: flex;
  max-width: 720px;
  border: 1px solid red;

  .room-switch {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    .back-button , .next-button {
      display: flex;
      align-items: center;
      justify-content: center;
      background: #EFEFFF;
      border-radius: 10.6667px;
      padding: 11px 14px;
      height: 35px;
      width: 35px;
      svg {
        height: 12px;
      }
    }
    .next-button {
      svg {
        transform: rotate(180deg);
      }
      
    }
    color: #ffff;
    padding: 8px;
    background: radial-gradient(162.46% 520.88% at 9.83% 3.6%, rgba(255, 255, 255, 0.56) 0%, rgba(217, 217, 217, 0.08) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
    background-blend-mode: overlay;

    /* Glassmorphism */
    backdrop-filter: blur(12px);

    /* Note: backdrop-filter has minimal browser support */
    border-radius: 16px;
  }
`
