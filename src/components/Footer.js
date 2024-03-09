import React from 'react'
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';

export function Footer() {
  return (
    <footer>

    <div>
      <p>Trendyol</p>
      <ul>
        <li>Who are we</li>
        <li>Career</li>
        <li>Communication</li>
        <li>Sell ​​on Trendyol</li>
      </ul>
    </div>
    <div>
      <p>Social Media</p>
      <ul>
        <li><XIcon /></li>
        <li><InstagramIcon /></li>
        <li><FacebookIcon /></li>
        <li><YouTubeIcon /></li>
      </ul>
    </div>
    <div>
      <p>Campaigns</p>
      <ul>
        <li>Active Campaigns</li>
        <li>Elite Membership</li>
        <li>Gift Ideas</li>
        <li>Trendyol Opportunities</li>
      </ul>
    </div>
    <div>
      <p>Help</p>
      <ul>
        <li>Frequently Asked Questions</li>
        <li>Live Help</li>
        <li>How Can I Return</li>
        <li>Transaction Guide</li>
        <img src="https://cdn.dsmcdn.com/web/production/etbis-qr.png" alt=''></img>
      </ul>
    </div>

  </footer>
  )
}
