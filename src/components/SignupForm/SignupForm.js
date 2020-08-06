import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ProfileForm from './ProfileForm';
import SocialForm from './SocialForm';
import ReviewForm from './Review';

export default function SignupForm() {
    return (
        <div className='signup-form'>
            <Switch>
                <Route path='/' exact component={ProfileForm} />
                <Route path='/social' exact component={SocialForm} />
                <Route path='/review' exact component={ReviewForm} />
            </Switch>
        </div>
    )
}