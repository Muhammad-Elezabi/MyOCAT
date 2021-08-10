import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { SiteWrapper } from './components';
import { DashboardBulletin } from './pages/Dashboard/DashboardBulletin';
import { NewAssessment } from './pages/Assessments/NewAssessment.jsx';
import { AssessmentList } from './pages/Assessments/AssessmentList';
import { Login } from './pages/Login/Login.jsx';
import { Register } from './pages/Login/Register.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

function getToken() {
}

export const App = () => {
  const token = getToken();
  console.log(!token);

  if(!token) {
    return <Login/>
  }

  return (
<SiteWrapper>
  <BrowserRouter>
    <Route path="/" component={DashboardBulletin} />
    <Route path="/assessment/new" component={NewAssessment} />
    <Route path="/assessment/list" component={AssessmentList} />
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />
  </BrowserRouter>
</SiteWrapper>
  );
}