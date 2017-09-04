const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");
const User = mongoose.model("users");

// https://stackoverflow.com/questions/27637609/understanding-passport-serialize-deserialize
// used to serializeUser the user for the session.
/*
 *  passport.serializeUser(function(user, done) {
        done(null, user.id);
                    |
    });             | 
                    |
                    |____________________> saved to session req.session.passport.user = {id:'..'}
                                    |          
    passport.deserializeUser(function(id, done) {
                    ________________|
                    | 
        User.findById(id, function(err, user) {
            done(err, user);
                    |______________>user object attaches to the request as req.user

        });
    });
*/
passport.serializeUser((user, done) => {
    done(null, user.id);
});

// used to deserialize the user
passport.deserializeUser((id, done) => {
    User.findById(id).then(user => {
        done(null, user);
    });
});

passport.use(
    new GoogleStrategy(
        {
            clientID: keys.web.client_id,
            clientSecret: keys.web.client_secret,
            callbackURL: "/auth/google/callback",
            proxy: true
        },
        (accessToken, refreshToken, profile, done) => {
            console.log("accessToken", accessToken);
            console.log("refreshToken", refreshToken);
            console.log("profile", profile);

            User.findOne({ googleId: profile.id }).then(existingUser => {
                if (existingUser) {
                    // we already have a user with this profile ID
                    done(null, existingUser);
                } else {
                    // we don't have a user record with this ID, make a new record
                    new User({ googleId: profile.id })
                        .save()
                        .then(user => done(null, user));
                }
            });
        }
    )
);
