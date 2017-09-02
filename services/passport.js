const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");
const User = mongoose.model("users");

passport.serializeUser((user, done) => {
    done(null, user.id);
});
passport.use(
    new GoogleStrategy(
        {
            clientID: keys.web.client_id,
            clientSecret: keys.web.client_secret,
            callbackURL: "/auth/google/callback"
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
