import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Dashboard from './pages/dashboard/Dashboard.jsx';
import Team from './pages/team/Team.jsx';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Calendar from './pages/calendar/Calendar.jsx';
import Contacts from './pages/contacts/Contacts.jsx';
import FAQ from './pages/faq/FAQ.jsx';
import Form from './pages/form/Form.jsx';
import Geagraphy from './pages/geagraphy/Geagraphy.jsx';
import Invoices from './pages/invoices/Invoices.jsx';
import Line from './pages/lineChart/Line.jsx';
import Pie from './pages/pieChart/Pie.jsx';
import Barchart from './pages/barchart/BarChart.jsx';
import NotFound from './pages/notFound.jsx/notFound.jsx';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Dashboard/>}/>
      <Route path='team' element={<Team/>}/>
      <Route path='calendar' element={<Calendar/>}/>
      <Route path='contacts' element={<Contacts/>}/>
      <Route path='faq' element={<FAQ/>}/>
      <Route path='form' element={<Form/>}/>
      <Route path='geagraphy' element={<Geagraphy/>}/>
      <Route path='invoices' element={<Invoices/>}/>
      <Route path='lineChart' element={<Line/>}/>
      <Route path='pieChart' element={<Pie/>}/>
      <Route path='barchart'element={<Barchart/>}/>
      <Route path='*'element={<NotFound/>}/>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);