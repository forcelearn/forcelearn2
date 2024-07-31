import React from 'react'
import { PARENT_WEBSITE_NAME, PARENT_WEBSITE_URL } from '../constants/constants'

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer">
      <p>© {currentYear}. Created & Maintained by <a href={ PARENT_WEBSITE_URL } target="_blank" rel="noopener noreferrer"> { PARENT_WEBSITE_NAME }. </a> All rights reserved.</p>
    </div>
  )
}

export default Footer
