import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Meetings from 'Screens/meetings/components/MeetingsList';
import CreateMeeting from 'Screens/meetings/components/CreateMeeting';
import CreateDaily from 'Screens/dailyMeetings/components/CreateDaily';
import Daily from 'Screens/dailyMeetings/components/Daily';
import TeamList from 'Screens/teams/components/TeamList';
import AddTeam from 'Screens/teams/components/AddTeam';
import TeamProfile from 'Screens/teams/components/TeamProfile';
import AddMember from 'Screens/teams/components/AddMember';
import EstimationList from 'Screens/estimations/components/EstimationList';
import CreateEstimation from 'Screens/estimations/components/CreateEstimation';
import Estimation from 'Screens/estimations/components/Estimation';
import Gathering from 'Screens/estimations/components/Gathering';
import EmailConfirmation from 'Screens/emailConfirmation';
import UserProfile from 'Screens/userProfile';
import LoadingScreen from 'Screens/loadingScreen';
import ContactUs from 'Screens/contactUs';
import Home from 'Screens/home';
import PrivacyPolicy from 'Screens/privacyPolicy';
import UserIsAuthenticated from 'Helpers/UserIsAuthenticated';

const Routes = () => (
  <div className="site-content">
    <Route exact path="/" component={Home} />
    <Route exact path="/email-confirmation" component={UserIsAuthenticated(EmailConfirmation)} />
    <Route exact path="/user/:uid" component={UserIsAuthenticated(UserProfile)} />
    <Switch>
      <Route exact path="/teams" component={UserIsAuthenticated(TeamList)} />
      <Route exact path="/teams/add" component={UserIsAuthenticated(AddTeam)} />
      <Route exact path="/teams/:teamid/addMember" component={UserIsAuthenticated(AddMember)} />
      <Route exact path="/teams/profile/:teamid" component={UserIsAuthenticated(TeamProfile)} />
    </Switch>
    <Switch>
      <Route exact path="/meetings" component={UserIsAuthenticated(Meetings)} />
      <Route exact path="/meetings/create" component={UserIsAuthenticated(CreateMeeting)} />
    </Switch>
    <Switch>
      <Route exact path="/daily/create" component={UserIsAuthenticated(CreateDaily)} />
      <Route exact path="/daily/ongoing/:dailyid" component={UserIsAuthenticated(Daily)} />
    </Switch>
    <Switch>
      <Route exact path="/estimation" component={UserIsAuthenticated(EstimationList)} />
      <Route exact path="/estimation/create" component={UserIsAuthenticated(CreateEstimation)} />
      <Route exact path="/estimation/ongoing/:estimationid" component={Estimation} />
      <Route exact path="/estimation/gathering/:estimationid" component={Gathering} />
    </Switch>
    <Route exact path="/login" component={LoadingScreen} />
    <Route exact path="/contacts" component={ContactUs} />
    <Route exact path="/privacy-policy" component={PrivacyPolicy} />
  </div>
);

export default Routes;
