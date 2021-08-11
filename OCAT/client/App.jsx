import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { SiteWrapper } from './components';
import { DashboardBulletin } from './pages/Dashboard/DashboardBulletin';
import { NewAssessment } from './pages/Assessments/NewAssessment.jsx';
import { AssessmentList } from './pages/Assessments/AssessmentList';
import { Login } from './pages/Login/Login.jsx';
import { Register } from './pages/Login/Register.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useToken } from './useToken';
import GlobalToken from './GlobalToken';

export const App = () => {
  const { setToken, token } = useToken();
  console.log(token);
  if (!token) {
    return <Login setToken={setToken} />;
  }
  console.log(token);

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
};

// function setToken(userToken) {
//   sessionStorage.setItem(`token`, JSON.stringify(userToken));
// }

// function getToken() {
//   const tokenString = sessionStorage.getItem(`token`);
//   const userToken = JSON.parse(tokenString);
//   return userToken?.token;
// }
