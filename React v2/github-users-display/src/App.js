import React from "react";
import Users from "./Users";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Header from "./Header";
import Footer from "./Footer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import NotFound from "./NotFound";
import UserById from "./UserById";
import Books from "./Books";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/users/:id" component={UserById} />
          <Route path="/users" component={Users} />
          <Route path="/books" component={Books} />

          {/* If user enters gives invalid url */}
          {/* <Redirect to="/" />  */}

          <Route path="**" component={NotFound} />
        </Switch>
        <Footer />
      </BrowserRouter>

      {/* <Users /> */}
    </div>
  );
}
