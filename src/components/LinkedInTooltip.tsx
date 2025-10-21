import styled from 'styled-components';

const LinkedInTooltip = () => {
  return (
    <StyledWrapper>
      <div className="tooltip-container">
        <div className="tooltip">
          <div className="profile">
            <div className="user">
              <div className="img">WB</div>
              <div className="details">
                <div className="name">Wishant Bhajan</div>
                <div className="username">Co-founder TableTech</div>
              </div>
            </div>
            <div className="about">150+ Connections • Open to Work</div>
          </div>
        </div>
        <div className="text">
          <a href="https://www.linkedin.com/in/wishant-bhajan-0a73832a4/" target="_blank" rel="noopener noreferrer" className="icon">
            <div className="layer">
              <span />
              <span />
              <span />
              <span />
              <span className="fab fa-linkedin">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </span>
            </div>
            <div className="text">LinkedIn</div>
          </a>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .tooltip-container {
    position: relative;
    cursor: pointer;
    transition: all 0.2s;
    font-size: 17px;
    border-radius: 10px;
  }

  .tooltip {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    padding: 10px;
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s;
    border-radius: 15px;
    z-index: 1000;
    box-shadow:
      inset 5px 5px 5px rgba(0, 0, 0, 0.2),
      inset -5px -5px 15px rgba(255, 255, 255, 0.1),
      5px 5px 15px rgba(0, 0, 0, 0.3),
      -5px -5px 15px rgba(255, 255, 255, 0.1);
  }

  .profile {
    background: #1a1f2e;
    border-radius: 10px 15px;
    padding: 10px;
    border: 1px solid #0077b5;
    width: 200px;
  }

  .tooltip-container:hover .tooltip {
    top: -160px;
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
  }

  .icon {
    text-decoration: none;
    color: #fff;
    display: block;
    position: relative;
  }

  .layer {
    width: 45px;
    height: 45px;
    transition: transform 0.3s;
  }

  .icon:hover .layer {
    transform: rotate(-35deg) skew(20deg);
  }

  .layer span {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 5px;
    transition: all 0.3s;
    background: rgba(31, 41, 55, 0.8);
  }

  .layer span.fab {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #0077b5;
  }

  .icon:hover .layer span {
    box-shadow: -1px 1px 3px rgba(0, 119, 181, 0.5);
  }

  .icon .text {
    position: absolute;
    left: 50%;
    bottom: -5px;
    opacity: 0;
    font-weight: 500;
    transform: translateX(-50%);
    transition:
      bottom 0.3s ease,
      opacity 0.3s ease;
    font-size: 12px;
    color: #0077b5;
  }

  .icon:hover .text {
    bottom: -35px;
    opacity: 1;
  }

  .icon:hover .layer span:nth-child(1) {
    opacity: 0.2;
  }
  .icon:hover .layer span:nth-child(2) {
    opacity: 0.4;
    transform: translate(5px, -5px);
  }
  .icon:hover .layer span:nth-child(3) {
    opacity: 0.6;
    transform: translate(10px, -10px);
  }
  .icon:hover .layer span:nth-child(4) {
    opacity: 0.8;
    transform: translate(15px, -15px);
  }
  .icon:hover .layer span:nth-child(5) {
    opacity: 1;
    transform: translate(20px, -20px);
  }

  .user {
    display: flex;
    gap: 10px;
  }

  .img {
    width: 45px;
    height: 45px;
    font-size: 18px;
    font-weight: 700;
    border: 1px solid #0077b5;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #0077b5, #0a66c2);
    color: #fff;
  }

  .name {
    font-size: 15px;
    font-weight: 700;
    color: #0077b5;
  }

  .username {
    font-size: 13px;
    color: #9ca3af;
  }

  .details {
    display: flex;
    flex-direction: column;
    gap: 0;
    color: #fff;
    justify-content: center;
  }

  .about {
    color: #9ca3af;
    padding-top: 5px;
    font-size: 12px;
  }`;

export default LinkedInTooltip;