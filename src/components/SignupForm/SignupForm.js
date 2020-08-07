import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ProfileForm from './ProfileForm';
import SocialForm from './SocialForm';
import ReviewForm from './Review';
import StepLinks from './StepLinks';

export default function SignupForm() {
    return (
        <div className='signup-form'>
            <StepLinks />
            <Switch>
                <Route path='/' exact component={ProfileForm} />
                <Route path='/social' exact component={SocialForm} />
                <Route path='/review' exact component={ReviewForm} />
            </Switch>
        </div>
    )
}