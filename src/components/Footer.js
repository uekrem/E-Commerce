import React from 'react';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Grid } from '@mui/material';

export function Footer() {
  return (
    <Grid className='footer' container>
      <Grid item xs={6} md={3}>
        <div className='footerColumn'>
          <p>Trendyol</p>
          <ul>
            <li>Who are we</li>
            <li>Career</li>
            <li>Communication</li>
            <li>Sell on Trendyol</li>
          </ul>
        </div>
      </Grid>
      <Grid item xs={6} md={3}>
        <div className='footerColumn'>
          <p>Social Media</p>
          <ul>
            <li><XIcon /></li>
            <li><InstagramIcon /></li>
            <li><FacebookIcon /></li>
            <li><YouTubeIcon /></li>
          </ul>
        </div>
      </Grid>
      <Grid item xs={6} md={3}>
        <div className='footerColumn'>
          <p>Campaigns</p>
          <ul>
            <li>Active Campaigns</li>
            <li>Elite Membership</li>
            <li>Gift Ideas</li>
            <li>Trendyol Opportunities</li>
          </ul>
        </div>
      </Grid>
      <Grid item xs={6} md={3}>
        <div className='footerColumn'>
          <p>Help</p>
          <ul>
            <li>Frequently Asked Questions</li>
            <li>Live Help</li>
            <li>How Can I Return</li>
            <li>Transaction Guide</li>
          </ul>
        </div>
      </Grid>
    </Grid>
  );
}
