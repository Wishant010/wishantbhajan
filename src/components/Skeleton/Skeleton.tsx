import React from 'react';
import './Skeleton.css';

const Skeleton: React.FC = () => {
  return (
    <div className="sk-wrapper">
      <div className="sk-skeleton">
        <div className="sk-head">
          <div className="sk-head-hemispheres" />
          <div className="sk-eye-shadow sk-eye-shadow-left" />
          <div className="sk-eye sk-eye-left" />
          <div className="sk-eye-shadow sk-eye-shadow-right" />
          <div className="sk-eye sk-eye-right" />
          <div className="sk-nose" />
          <div className="sk-nose-shadow" />
          <div className="sk-mouth">
            <div className="sk-teeth sk-teeth-left" />
            <div className="sk-teeth sk-teeth-right" />
          </div>
        </div>
        <div className="sk-below-head-container">
          <div className="sk-backbone" />
          <div className="sk-body">
            <div className="sk-body-inner">
              <div className="sk-main-bone" />
              <div className="sk-shoulder" />
              <div className="sk-rib-cage sk-rib-cage-1" />
              <div className="sk-rib-cage sk-rib-cage-2" />
              <div className="sk-kidney-cover" />
              <div className="sk-kidney sk-kidney-left" />
              <div className="sk-kidney sk-kidney-right" />
              <div className="sk-hand sk-hand-left">
                <div className="sk-hand-top" />
                <div className="sk-arm" />
                <div className="sk-arm-below-container">
                  <div className="sk-forearm" />
                  <div className="sk-wrist" />
                  <div className="sk-finger sk-finger-pinky" />
                  <div className="sk-finger sk-finger-thumb" />
                  <div className="sk-finger sk-finger-ring" />
                  <div className="sk-finger sk-finger-index" />
                </div>
              </div>
              <div className="sk-hand sk-hand-right">
                <div className="sk-hand-top" />
                <div className="sk-arm" />
                <div className="sk-arm-below-container">
                  <div className="sk-forearm" />
                  <div className="sk-wrist" />
                  <div className="sk-finger sk-finger-pinky" />
                  <div className="sk-finger sk-finger-thumb" />
                  <div className="sk-finger sk-finger-ring" />
                  <div className="sk-finger sk-finger-index" />
                </div>
              </div>
            </div>
            <div className="sk-feet-container">
              <div className="sk-foot sk-foot-left">
                <div className="sk-thigh" />
                <div className="sk-leg sk-leg-left" />
                <div className="sk-shoe" />
              </div>
              <div className="sk-foot sk-foot-right">
                <div className="sk-thigh" />
                <div className="sk-leg sk-leg-right" />
              </div>
            </div>
          </div>
        </div>
        <div className="sk-shadow" />
      </div>
    </div>
  );
};

export default React.memo(Skeleton);
