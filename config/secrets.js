module.exports = {
   db: process.env.MONGODB || 'mongodb://localhost/cuistot',
	 google: {
    clientID: process.env.GOOGLE_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: '/auth/google/callback'
  }
}
