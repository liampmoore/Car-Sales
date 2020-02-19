import React from 'react';
import AdditionalFeature from './AdditionalFeature';

import { connect } from 'react-redux';
import {addFeature, removeFeature} from '../actions/carActions';

const AdditionalFeatures = props => {
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.additionalFeatures.length ? (
        <ol type="1">
          {props.additionalFeatures.map(item => (
            <>{Boolean(props.addedFeatures.includes(item.id)) ? '' : <AdditionalFeature
              key={item.id}
              feature={item}
              addFeature={props.addFeature}
            />}</>
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    additionalFeatures: state.additionalFeatures,
    addedFeatures: state.car.features
  }
}

export default connect(mapStateToProps, {addFeature, removeFeature})(AdditionalFeatures);
