import { useDarkMode } from "../../../common/containers/App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import "../styles/_app.scss";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    darkModeStatus: state, //get the status from reducer store and using it as darkMode Status
  };
};

function App({ dispatch, darkModeStatus }) {
  return (
    <div className="app">
      <div className="level">
        <div>
          <h1 className="title">Dark Mode Challenge</h1>
        </div>

        {/* --The button that should toggle dark mode-- */}
        <button className="app__dark-mode-btn icon level-right">
          <button
            className="app__dark-mode-btn icon level-right"
            onClick={() => dispatch({ type: !darkModeStatus })} //acts like a toggle to switch between dark mode
          >
            {/* Conditional rendering to make sure only the sun or moon is seen depending upon the mode */}
            {darkModeStatus ? (
              <FontAwesomeIcon
                // onClick={darkModeOff}
                className="animate__animated animate__bounceIn faster"
                color="#FFA500"
                icon={faSun}
              />
            ) : (
              <FontAwesomeIcon
                // onClick={darkModeOn}
                className="animate__animated animate__bounceIn faster"
                icon={faMoon}
              />
            )}
          </button>
        </button>
      </div>

      <div className="columns">
        <div className="column">
          <p>
            Lollipop powder powder. Cotton candy caramels chupa chups halvah
            muffin caramels apple pie topping cake. Topping chocolate bar pastry
            chocolate cake. Cupcake tart jujubes dragée jelly-o icing sugar
            plum. Chocolate bar lollipop candy canes. Biscuit croissant apple
            pie pudding caramels wafer tart tootsie roll macaroon. Croissant
            tiramisu chocolate bar carrot cake lemon drops halvah.
          </p>
        </div>
        <div className="column">
          <p>
            Marshmallow tiramisu liquorice bear claw chocolate bar bear claw
            tart. Muffin chupa chups pie. Brownie apple pie topping lemon drops
            marzipan toffee. Pudding macaroon icing ice cream bonbon cake tart.
            Pudding sugar plum chocolate cake cake biscuit pastry pastry
            chocolate bar tart. Lemon drops dessert gummies icing.
          </p>
        </div>
      </div>

      <div className="field">
        <div className="control">
          <input className="input" type="text" placeholder="Name" />
        </div>
      </div>

      <div className="field">
        <div className="control">
          <input className="input" type="text" placeholder="Email" />
        </div>
      </div>

      <section className="section">
        <div className="buttons level-right">
          <a className="button is-primary">Save</a>
          <a className="button is-link">Submit</a>
        </div>
      </section>
    </div>
  );
}

export const Container = connect(mapStateToProps)(App);

export default Container;
