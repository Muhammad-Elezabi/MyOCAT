import React, { useState } from 'react';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import { SiteWrapper } from './components';
import { DashboardBulletin } from './pages/Dashboard/DashboardBulletin';
import { NewAssessment } from './pages/Assessments/NewAssessment.jsx';
import { AssessmentList } from './pages/Assessments/AssessmentList';
import { Login } from './pages/Login/Login.jsx';
import { useToken } from './useToken';
import 'bootstrap/dist/css/bootstrap.min.css';

function setToken(userToken) {
  sessionStorage.setItem(`token`, JSON.stringify(userToken));
}

function getToken() {
  const tokenString = sessionStorage.getItem(`token`);
  console.log(tokenString);
  const userToken = JSON.parse(tokenString);
  console.log(userToken);
  return userToken;
}

export const App = () => {
  const token = getToken();
  if (!token) {
    return (
      <SiteWrapper>
        <BrowserRouter>
          <Route path="/" component={DashboardBulletin} />
          <Login setToken={setToken} />
        </BrowserRouter>
      </SiteWrapper>
    );
  }

  return (
    <SiteWrapper>
      <BrowserRouter>
        <Route path="/" component={DashboardBulletin} />
        <Route path="/assessment/new" component={NewAssessment} />
        <Route path="/assessment/list" component={AssessmentList} />
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
