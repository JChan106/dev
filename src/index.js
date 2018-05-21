import _ from "lodash";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import SearchBar from "./components/search_bar.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="container">
        <div className="red-block">
          <div className="spacer"/>
          <div className="firsthalf">
            <div className="top">
              <a href=""><img className="logo" src="../public/devtest-whitelogo.png" width='200'></img></a>
              <SearchBar />
            </div>
            <div className="line"/>
            <div className="nav">
              <div><a href="">About</a></div>
              <div><a href="">Rates</a></div>
              <div><a href="">Requirements</a></div>
              <div><a href="">FAQ</a></div>
              <div><a href="">Apply!</a></div>
            </div>
            <div className="mid">
              <div className="bigtext">
                Lorem ipsum dolor sit amet, consectetur
              </div>
              <div className="apiform">
                <div className="textform">Do This Thing!</div>
                <div className="form 1">
                  <form>
                    Pay Date 1<br/>
                    <input type="text" name="date1" placeholder=" / /"/><br/>
                  </form>
                  <div className="spaceform"/>
                  <form>
                    Pay Date 2<br/>
                    <input type="text" name="date2" placeholder=" / /"/><br/>
                  </form>
                </div>
                <div className="form 2">
                  <form>
                    Employment Type<br/>
                    <input type="text" name="emptype"/><br/>
                  </form>
                  <div className="spaceform"/>
                  <form>
                    Employment Name<br/>
                    <input type="text" name="empname"/><br/>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="spacer"/>
        </div>
        <div className="white-block">
          <div className="spacer"/>
          <div className="bottomhalf">
            <div className="splittext">
              <div>
                <h2>Consectetur, Adipiscing Elit</h2>
                Chambray bushwick you probably havent heard of them biodiesel fingerstache ethical, chillwave vegan food truck farm-to-table four loko DIY hella beard. Jean shorts street art artisan leggings, wolf organic. <a href="">This is a link</a> organic echo park occupy, pour-over Austin wayfarers cosby sweater umami leggings swag shoreditch fap. Messenger bag Austin vinyl artisan.
              </div>
              <div>
                <h2>Lorem ipsum dolor sit amet</h2>
                Butcher whatever gluten-free shoreditch bespoke, mumblecore echo park DIY. Blog narwhal salvia, locavore stumptown umami dreamcatcher bicycle rights wolf portland 8-bit mcsweeneys. Chambray portland VHS vinyl pork belly. Mlkshk vice ethical pork belly fanny pack, shoreditch viral fap. Austin art party VHS +1 direct trade williamsburg flexitarian locavore stumptown.
              </div>
            </div>
            <div className="lorem">
              <h2>Lorem ipsum dolor sit amet</h2>
              Chambray bushwick you probably havent heard of them biodiesel fingerstache ethical, chillwave vegan food truck farm-to-table four loko DIY hella beard. Jean shorts street art artisan leggings, wolf organic. Echo park occupy, pour-over Austin wayfarers cosby sweater umami leggings swag shoreditch fap. Messenger bag Austin vinyl artisan.
            </div>
            <h1>This is a very important header</h1>
            <h2>This is also an important header</h2>
            <h3>This is important too</h3>
            <h4>Everything is important, really</h4>
            <br/>
            <div>
              Butcher whatever gluten-free shoreditch bespoke, mumblecore echo park DIY. Blog narwhal salvia, locavore stumptown umami dreamcatcher bicycle rights wolf portland 8-bit mcsweeneys. Chambray portland VHS vinyl pork belly. Mlkshk vice ethical pork belly fanny pack, shoreditch viral fap. Austin art party VHS +1 direct trade williamsburg flexitarian locavore stumptown umami dreamcatcher bicycle rights wolf cray. Etsy photo booth cosby sweater forage. You probably havent heard of them biodiesel fingerstache ethical, chillwave vegan food truck farm-to-table four loko DIY hella beard. Jean shorts street art artisan leggings, wolf organic. Echo park occupy, pour-over Austin wayfarers cosby sweater umami leggings swag shoreditch fap.
            </div>
          </div>
          <div className="spacer"/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".container"));
