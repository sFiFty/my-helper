import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {Container, Header, Divider, List} from 'semantic-ui-react'

export default class PrivacyPolicy extends PureComponent {
  render() {
    return (
      <Container>
        <p>This Privacy Policy governs the manner in which Scrum Helper collects, uses, 
        maintains and discloses information collected from users (each, a "User") 
        of the https://scrum-helper.ninja/ website ("Site").</p>
        <Header as='h3'>Personal identification information</Header>
        <p>We may collect personal identification information from Users in a variety of ways, 
        including, but not limited to, when Users visit our site, register on the site, 
        and in connection with other activities, services, features or resources we make available on our Site. 
        Users may be asked for, as appropriate, name, email address. Users may, however, visit our Site anonymously. 
        We will collect personal identification information from Users only if they voluntarily submit such information to us. 
        Users can always refuse to supply personally identification information, except that it may prevent them from engaging 
        in certain Site related activities.</p>

        <Header as='h3'>Non-personal identification information</Header>
        <p>We may collect non-personal identification information about Users whenever they interact with our Site. 
        Non-personal identification information may include the browser name, 
        the type of computer and technical information about Users means of connection to our Site, 
        such as the operating system and the Internet service providers utilized and other similar information.</p>

        <Header as='h3'>Web browser cookies</Header>
        <p>Our Site may use "cookies" to enhance User experience. 
        User's web browser places cookies on their hard drive for record-keeping purposes and sometimes to track information 
        about them. User may choose to set their web browser to refuse cookies, or to alert you when cookies are being sent. 
        If they do so, note that some parts of the Site may not function properly.</p>

        <Header as='h3'>How we use collected information</Header>
        <p>Scrum Helper may collect and use Users personal information for the following purposes:</p>
        <List bulleted>
          <List.Item>
            <i>To run and operate our Site</i>
            <p>We may need your information display content on the Site correctly.</p>
          </List.Item>
          <List.Item>
            <i>To improve customer service</i>
            <p>Information you provide helps us respond to your customer service requests and support needs more efficiently.</p>
          </List.Item>
          <List.Item>
            <i>To personalize user experience</i>
            <p>We may use information in the aggregate to understand how our Users 
            as a group use the services and resources provided on our Site.</p>
          </List.Item>
          <List.Item>
            <i>To improve our Site</i>
            <p>We may use feedback you provide to improve our products and services.</p>
          </List.Item>
          <List.Item>
            <i>To send periodic emails</i>
            <p>We may use the email address to send them information and updates pertaining to their order.</p>
          </List.Item>
        </List>

        <Header as='h3'>How we protect your information</Header>
        <p>
          We adopt appropriate data collection, storage and processing practices and security measures to protect against 
          unauthorized access, alteration, disclosure or destruction of your personal information, username, password, 
          transaction information and data stored on our Site.
        </p>

        <Header as='h3'>Sharing your personal information</Header>
        <p>
          We do not sell, trade, or rent Users personal identification information to others. 
          We may share generic aggregated demographic information not linked to any personal identification information 
          regarding visitors and users with our business partners, trusted affiliates and advertisers for the purposes 
          outlined above.
        </p>

        <Header as='h3'>Third party websites</Header>
        <p>
          Users may find advertising or other content on our Site that link to the sites and services of our partners, 
          suppliers, advertisers, sponsors, licensors and other third parties. 
          We do not control the content or links that appear on these sites and are not responsible for the practices employed 
          by websites linked to or from our Site. 
          In addition, these sites or services, including their content and links, may be constantly changing. 
          These sites and services may have their own privacy policies and customer service policies. 
          Browsing and interaction on any other website, including websites which have a link to our Site, 
          is subject to that website's own terms and policies.
        </p>

        <Header as='h3'>Changes to this privacy policy</Header>
        <p>
          Scrum Helper has the discretion to update this privacy policy at any time. 
          When we do, we will post a notification on the main page of our Site, 
          revise the updated date at the bottom of this page. 
          We encourage Users to frequently check this page for any changes to stay informed about how we are helping 
          to protect the personal information we collect. You acknowledge and agree that it is your responsibility to 
          review this privacy policy periodically and become aware of modifications.
        </p>

        <Header as='h3'>Your acceptance of these terms</Header>
        <p>
          By using this Site, you signify your acceptance of this policy. 
          If you do not agree to this policy, please do not use our Site. 
          Your continued use of the Site following the posting of changes to this policy will be deemed your acceptance 
          of those changes. This privacy policy was built with a free policy generator.
        </p>

        <Header as='h3'>Contacting us</Header>
        <p>
          If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, 
          please contact us.
        </p>
        <p>
          This document was last updated on March 27, 2018
        </p>
      </Container>
    )
  }
}