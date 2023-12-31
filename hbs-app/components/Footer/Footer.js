import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-logo'>
            <img 
            src="/logofooter.png" 
            alt="Logo" 
            className="footer-image"
        />
            </div>
            <hr class="custom-hr"></hr>
            <div className='footer-content'>
                <div className='footer-section about'>
                    <h3>Le Bijou Magnifique</h3>
                    <p>Welcome to HotelName, your home away from home. We offer the best in comfort and luxury.</p>
                </div>
                <div className='footer-section links'>
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="/rooms">Rooms</a></li>
                        <li><a href="/booking">Book Now</a></li>
                    </ul>
                </div>
                <div className='footer-section contact'>
                    <h3>Contact Us</h3>

                    <div className="newsletter">
                        <div className="input-group">
                            <input type="email" placeholder="Enter your email" />
                            <button type="submit">
                            <svg viewBox="0 0 24 24" className="send-icon">
                            {/* SVG path for a paper airplane icon */}
                            <path d="M2,21L23,12L2,3V10L17,12L2,14V21Z" />
                            </svg>
                            </button>
                        </div>
                    </div>
                    
                    <p><strong>Phone:</strong> 123-456-7890</p>
                    <p><strong>Email:</strong> contact@hotelname.com</p>
                    <div className='social-media'>
                    <a href="#" class="social-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.35c0 .732.593 1.325 1.325 1.325h11.488v-9.294h-3.126v-3.622h3.126v-2.667c0-3.1 1.895-4.788 4.664-4.788 1.325 0 2.462.099 2.793.143v3.238h-1.917c-1.504 0-1.794.713-1.794 1.76v2.314h3.586l-.467 3.622h-3.119v9.294h6.162c.732 0 1.325-.593 1.325-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                        </svg>
                        </a>

                        <a href="#" class="social-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M24 4.557c-.884.392-1.83.656-2.828.774 1.017-.609 1.797-1.574 2.165-2.723-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.556-3.594-1.556-2.72 0-4.92 2.2-4.92 4.92 0 .386.044.762.127 1.122-4.087-.205-7.713-2.164-10.141-5.144-.424.729-.666 1.577-.666 2.483 0 1.713.869 3.228 2.188 4.114-.807-.026-1.566-.247-2.232-.616v.062c0 2.392 1.701 4.384 3.955 4.837-.414.112-.849.172-1.3.172-.318 0-.627-.031-.927-.089.627 1.953 2.445 3.377 4.604 3.415-1.685 1.32-3.808 2.107-6.115 2.107-.398 0-.79-.023-1.175-.067 2.179 1.397 4.768 2.212 7.548 2.212 9.057 0 14.01-7.503 14.01-14.009 0-.213-.005-.425-.014-.636.964-.695 1.796-1.562 2.457-2.549z"/>
                        </svg>
                        </a>

                        <a href="#" class="social-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                            <path d="M7.75 2A5.75 5.75 0 0 0 2 7.75v8.5A5.75 5.75 0 0 0 7.75 22h8.5A5.75 5.75 0 0 0 22 16.25v-8.5A5.75 5.75 0 0 0 16.25 2h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm5.25-1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z"/>
                            <path d="M0 0h24v24H0z" fill="none"/>
                        </svg>
                        </a>

                    </div>
                </div>
            </div>
            <hr class="custom-hr"></hr>
            <div className='footer-bottom'>
                &copy; {new Date().getFullYear()} Le Bijou Magnifique | Designed by JS & FMB.
            </div>
        </footer>
    );
};

export default Footer;
