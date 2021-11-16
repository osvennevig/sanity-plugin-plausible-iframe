import React from 'react'
import {DashboardWidget} from "@sanity/dashboard";
import config from 'config:plausible-iframe'

// Values from Plausible embed url. 
// Only 'site' needs to be changed in sanity config.
const root = 'https://plausible.io/share'
const site = `${config.site}` //'YOUR SITE HERE'
const embed = 'true'
const theme = 'light'
const background = 'transparent'

const PlausibleIframe = () => {
  return (
  <DashboardWidget header="Plausible analytics">
    <>
      <iframe plausible-embed
      src={`${root}/${site}&embed=${embed}&theme=${theme}&background=${background}`}
      scrolling="no" frameborder="0" loading="lazy" 
      style={{width: '1px', minWidth: '100%', height: '1600px'}}>
      </iframe>
      <script async src="https://plausible.io/js/embed.host.js"></script>
    </>
  </DashboardWidget>
  )
}

export default {
  name: "plausible-iframe",
  component: PlausibleIframe,
};