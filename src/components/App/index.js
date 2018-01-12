/*
 * Author: Alexandre Havrileck (Oxyno-zeta)
 * Date: 18/10/16
 * Licence: See Readme
 */
/* ************************************* */
/* ********       IMPORTS       ******** */
/* ************************************* */
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Body from './Body';

/* ************************************* */
/* ********      VARIABLES      ******** */
/* ************************************* */
// Prop types
const propTypes = {};
// Default props
const defaultProps = {};

/* ************************************* */
/* ********      COMPONENT      ******** */
/* ************************************* */

const App = () => (
    <div>
        <Header />
        <Body />
        <Footer />
    </div>
)

// Add prop types
App.propTypes = propTypes;
// Add default props
App.defaultProps = defaultProps;

/* ************************************* */
/* ********       EXPORTS       ******** */
/* ************************************* */
export default App;
