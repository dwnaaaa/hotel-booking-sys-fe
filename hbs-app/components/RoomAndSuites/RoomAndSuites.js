import React from 'react';
import Layout from '../Layout/Layout';
import './RoomAndSuites.css'; // Ensure you have this CSS file

const GuestIcon = () => (
    <svg width="28px" height="28px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="8" r="2.5" stroke="#222222" stroke-linecap="round"/>
<path d="M13.7679 6.5C13.9657 6.15743 14.2607 5.88121 14.6154 5.70625C14.9702 5.5313 15.3689 5.46548 15.7611 5.51711C16.1532 5.56874 16.5213 5.73551 16.8187 5.99632C17.1161 6.25713 17.3295 6.60028 17.4319 6.98236C17.5342 7.36445 17.521 7.76831 17.3939 8.14288C17.2667 8.51745 17.0313 8.8459 16.7175 9.08671C16.4037 9.32751 16.0255 9.46985 15.6308 9.49572C15.2361 9.52159 14.8426 9.42983 14.5 9.23205" stroke="#222222"/>
<path d="M10.2321 6.5C10.0343 6.15743 9.73935 5.88121 9.38458 5.70625C9.02981 5.5313 8.63113 5.46548 8.23895 5.51711C7.84677 5.56874 7.47871 5.73551 7.18131 5.99632C6.88391 6.25713 6.67053 6.60028 6.56815 6.98236C6.46577 7.36445 6.47899 7.76831 6.60614 8.14288C6.73329 8.51745 6.96866 8.8459 7.28248 9.08671C7.5963 9.32751 7.97448 9.46985 8.36919 9.49572C8.76391 9.52159 9.15743 9.42983 9.5 9.23205" stroke="#222222"/>
<path d="M12 12.5C16.0802 12.5 17.1335 15.8022 17.4054 17.507C17.4924 18.0524 17.0523 18.5 16.5 18.5H7.5C6.94771 18.5 6.50763 18.0524 6.59461 17.507C6.86649 15.8022 7.91976 12.5 12 12.5Z" stroke="#222222" stroke-linecap="round"/>
<path d="M19.2965 15.4162L18.8115 15.5377L19.2965 15.4162ZM13.0871 12.5859L12.7179 12.2488L12.0974 12.9283L13.0051 13.0791L13.0871 12.5859ZM17.1813 16.5L16.701 16.639L16.8055 17H17.1813V16.5ZM15.5 12C16.5277 12 17.2495 12.5027 17.7783 13.2069C18.3177 13.9253 18.6344 14.8306 18.8115 15.5377L19.7816 15.2948C19.5904 14.5315 19.2329 13.4787 18.578 12.6065C17.9126 11.7203 16.9202 11 15.5 11V12ZM13.4563 12.923C13.9567 12.375 14.6107 12 15.5 12V11C14.2828 11 13.3736 11.5306 12.7179 12.2488L13.4563 12.923ZM13.0051 13.0791C15.3056 13.4614 16.279 15.1801 16.701 16.639L17.6616 16.361C17.1905 14.7326 16.019 12.5663 13.1691 12.0927L13.0051 13.0791ZM18.395 16H17.1813V17H18.395V16ZM18.8115 15.5377C18.8653 15.7526 18.7075 16 18.395 16V17C19.2657 17 20.0152 16.2277 19.7816 15.2948L18.8115 15.5377Z" fill="#222222"/>
<path d="M10.9129 12.5859L10.9949 13.0791L11.9026 12.9283L11.2821 12.2488L10.9129 12.5859ZM4.70343 15.4162L5.18845 15.5377L4.70343 15.4162ZM6.81868 16.5V17H7.19453L7.29898 16.639L6.81868 16.5ZM8.49999 12C9.38931 12 10.0433 12.375 10.5436 12.923L11.2821 12.2488C10.6264 11.5306 9.71723 11 8.49999 11V12ZM5.18845 15.5377C5.36554 14.8306 5.68228 13.9253 6.22167 13.2069C6.75048 12.5027 7.47226 12 8.49999 12V11C7.0798 11 6.08743 11.7203 5.42199 12.6065C4.76713 13.4787 4.40955 14.5315 4.21841 15.2948L5.18845 15.5377ZM5.60498 16C5.29247 16 5.13465 15.7526 5.18845 15.5377L4.21841 15.2948C3.98477 16.2277 4.73424 17 5.60498 17V16ZM6.81868 16H5.60498V17H6.81868V16ZM7.29898 16.639C7.72104 15.1801 8.69435 13.4614 10.9949 13.0791L10.8309 12.0927C7.98101 12.5663 6.8095 14.7326 6.33838 16.361L7.29898 16.639Z" fill="#222222"/>
    </svg>
  );

const BedIcon = () => (
    <svg fill="#000000" width="18px" height="18px" viewBox="0 0 512 512" id="Layer_1" enable-background="new 0 0 512 512" xmlns="http://www.w3.org/2000/svg">

<g>

<path d="m496 320c0-15.581 0-282.497 0-296 0-8.836-7.163-16-16-16s-16 7.164-16 16v16h-416v-16c0-8.836-7.164-16-16-16s-16 7.164-16 16v296c-8.836 0-16 7.164-16 16v152c0 8.836 7.164 16 16 16h56c6.061 0 11.601-3.424 14.311-8.845l19.578-39.155h300.223l19.578 39.155c2.71 5.421 8.25 8.845 14.311 8.845h56c8.837 0 16-7.164 16-16v-152c-.001-8.836-7.164-16-16.001-16zm-32-91.833c-11.449-7.679-25.209-12.167-40-12.167h-56v-32c0-35.29-28.71-64-64-64h-96c-35.29 0-64 28.71-64 64v32h-56c-14.791 0-28.551 4.488-40 12.167v-156.167h416zm-128-12.167h-160v-32c0-17.645 14.355-32 32-32h96c17.645 0 32 14.355 32 32zm-288 72c0-22.056 17.944-40 40-40h336c22.056 0 40 17.944 40 40v32h-416zm432 184h-30.111l-19.578-39.155c-2.71-5.421-8.25-8.845-14.311-8.845h-320c-6.061 0-11.601 3.424-14.311 8.845l-19.578 39.155h-30.111v-120h448z"/>

</g>

</svg>
    );
  
const AreaIcon = () => (
    <svg fill="#000000" width="18px" height="18px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path d="M21.434 11.975l8.602-8.549-0.028 4.846c-0.009 0.404 0.311 0.755 0.716 0.746l0.513-0.001c0.404-0.009 0.739-0.25 0.748-0.654l0.021-7.219c0-0.007-0.027-0.012-0.027-0.019l0.040-0.366c0.004-0.203-0.044-0.384-0.174-0.513-0.13-0.131-0.311-0.21-0.512-0.204l-0.366 0.009c-0.007 0-0.012 0.003-0.020 0.004l-7.172-0.032c-0.404 0.009-0.738 0.343-0.747 0.748l-0.001 0.513c0.061 0.476 0.436 0.755 0.84 0.746l4.726 0.013-8.572 8.52c-0.39 0.39-0.39 1.024 0 1.415s1.023 0.39 1.414 0zM10.597 20.025l-8.602 8.523 0.027-4.82c0.010-0.404-0.312-0.756-0.716-0.747l-0.544 0.001c-0.405 0.010-0.739 0.25-0.748 0.654l-0.021 7.219c0 0.007 0.028 0.011 0.028 0.019l-0.040 0.365c-0.005 0.203 0.043 0.385 0.174 0.514 0.129 0.131 0.311 0.21 0.512 0.205l0.366-0.009c0.007 0 0.012-0.003 0.020-0.003l7.203 0.032c0.404-0.010 0.738-0.344 0.748-0.748l0.001-0.514c-0.062-0.476-0.436-0.755-0.84-0.746l-4.726-0.012 8.571-8.518c0.39-0.39 0.39-1.023 0-1.414s-1.023-0.391-1.413-0zM32.007 30.855l-0.021-7.219c-0.009-0.404-0.343-0.645-0.747-0.654l-0.513-0.001c-0.404-0.009-0.725 0.343-0.716 0.747l0.028 4.846-8.602-8.549c-0.39-0.39-1.023-0.39-1.414 0s-0.39 1.023 0 1.414l8.571 8.518-4.726 0.012c-0.404-0.009-0.779 0.27-0.84 0.746l0.001 0.514c0.009 0.404 0.344 0.739 0.747 0.748l7.172-0.032c0.008 0 0.013 0.003 0.020 0.003l0.366 0.009c0.201 0.005 0.384-0.074 0.512-0.205 0.131-0.129 0.178-0.311 0.174-0.514l-0.040-0.365c0-0.008 0.027-0.012 0.027-0.019zM3.439 2.041l4.727-0.012c0.404 0.009 0.778-0.27 0.84-0.746l-0.001-0.513c-0.010-0.405-0.344-0.739-0.748-0.748l-7.204 0.031c-0.008-0.001-0.013-0.004-0.020-0.004l-0.366-0.009c-0.201-0.005-0.383 0.074-0.512 0.204-0.132 0.13-0.179 0.31-0.174 0.514l0.040 0.366c0 0.007-0.028 0.012-0.028 0.020l0.021 7.219c0.009 0.404 0.343 0.645 0.748 0.654l0.545 0.001c0.404 0.009 0.724-0.342 0.715-0.746l-0.028-4.819 8.602 8.523c0.39 0.39 1.024 0.39 1.414 0s0.39-1.024 0-1.415z"></path>
</svg>  
)
const RoomAndSuites = () => {
  return (
    <Layout>
      <div className="room-suites-container">
        <h1>Rooms and Suites</h1>
        <div className="rooms-container">

          <div className="room-card">

          <div className="room-price">
                <span>&#8369;120 / night</span>
              </div>

          <div className="room-image-container">
              <img src="images\rooms\twin.jpg" alt="Room Image" />
          </div>
          <div className="room-details">
              <h1>Deluxe Room</h1>

              <div className="info-row">
                <div className="guest-capacity">
                <GuestIcon />
                <span>2 guests</span>
                </div>

                <div className="guest-capacity">
                <BedIcon />
                <span>Twin Beds</span>
                </div>

                <div className="guest-capacity">
                <AreaIcon />
                <span>37 sqm.</span>
                </div>
            </div>

              <p className="room-description">A cozy retreat perfect for friends or siblings, our Deluxe Room features two single beds in a beautifully designed space. Enjoy modern amenities, a serene atmosphere, and a view that adds a touch of relaxation to your stay.</p>
              <ul className="room-services">
                  <li>Complimentary Wi-Fi</li>
                  <li>Daily Housekeeping</li>
                  <li>Room Service</li>
                  <li>Laundry Service</li>
              </ul>

          </div>
      </div>

      <div className="room-card">

        <div className="room-price">
            <span>&#8369;120 / night</span>
            </div>

        <div className="room-image-container">
            <img src="images\rooms\deluxe twin.jpg" alt="Room Image" />
        </div>
        <div className="room-details">
            <h1>Grand Room</h1>

            <div className="info-row">
            <div className="guest-capacity">
            <GuestIcon />
            <span>4 guests</span>
            </div>

            <div className="guest-capacity">
            <BedIcon />
            <span>Deluxe Twin Beds</span>
            </div>

            <div className="guest-capacity">
            <AreaIcon />
            <span>46 sqm.</span>
            </div>
        </div>

            <p className="room-description">Elevate your experience in our Grand Room, boasting extra space and luxury. With two large beds, sophisticated decor, and a range of premium amenities, it's an ideal choice for those seeking comfort with a touch of elegance.</p>
            <ul className="room-services">
                <li>Complimentary Wi-Fi</li>
                <li>Daily Housekeeping</li>
                <li>Room Service</li>
                <li>Laundry Service</li>
            </ul>

        </div>
        </div>

        <div className="room-card">

        <div className="room-price">
            <span>&#8369;120 / night</span>
            </div>

        <div className="room-image-container">
            <img src="images\rooms\double deck.jpg" alt="Room Image" />
        </div>
        <div className="room-details">
            <h1>Suite Room</h1>

            <div className="info-row">
            <div className="guest-capacity">
            <GuestIcon />
            <span>6 guests</span>
            </div>

            <div className="guest-capacity">
            <BedIcon />
            <span>Double Deck Beds</span>
            </div>

            <div className="guest-capacity">
            <AreaIcon />
            <span>56 sqm.</span>
            </div>
            
        </div>

            <p className="room-description">Our Suite Room offers a fun and unique stay, especially for younger guests or friends. Featuring bunk beds, a vibrant decor, and all essential comforts, it's perfect for adventurous spirits looking for an unconventional lodging experience.</p>
            <ul className="room-services">
                <li>Complimentary Wi-Fi</li>
                <li>Daily Housekeeping</li>
                <li>Room Service</li>
                <li>Laundry Service</li>
            </ul>

        </div>
        </div>

        <div className="room-card">

            <div className="room-price">
                <span>&#8369;120 / night</span>
                </div>

            <div className="room-image-container">
                <img src="images\rooms\king.jpg" alt="Room Image" />
            </div>
            <div className="room-details">
                <h1>Executive Room</h1>

                <div className="info-row">
                <div className="guest-capacity">
                <GuestIcon />
                <span>8 guests</span>
                </div>

                <div className="guest-capacity">
                <BedIcon />
                <span>King Bed</span>
                </div>
                
                <div className="guest-capacity">
                <AreaIcon />
                <span>68 sqm.</span>
                </div>

            </div>

                <p className="room-description">Indulge in the ultimate luxury in our Executive Room, where elegance meets comfort. The room features a plush king-sized bed, opulent furnishings, and state-of-the-art amenities, making it perfect for couples or anyone desiring a lavish stay.</p>
                <ul className="room-services">
                    <li>Complimentary Wi-Fi</li>
                    <li>Daily Housekeeping</li>
                    <li>Room Service</li>
                    <li>Laundry Service</li>
                </ul>

            </div>
            </div>
        </div>
      </div>
    </Layout>
  );
}

export default RoomAndSuites;
