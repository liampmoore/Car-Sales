import React from 'react';
import {connect} from 'react-redux';

import AddedFeature from './AddedFeature';
import {removeFeature} from '../actions/carActions'

const AddedFeatures = props => {
  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.car.features.length ? (
        <ol type="1">
          {props.additionalFeatures.map(feature => (
            props.car.features.includes(feature.id) ? <AddedFeature removeFeature={props.removeFeature} feature={feature} /> : null
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    car: state.car,
    additionalFeatures: state.additionalFeatures
  }
}

export default connect(mapStateToProps, {removeFeature})(AddedFeatures);
