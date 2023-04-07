conn = new Mongo();
db = conn.getDB("facebook-clone");
db.createUser({
  user: "writer",
  pwd: process.env["MONGODB_PASSWORD"],
  roles: [
    {
      role: "readWrite",
      db: "facebook-clone",
    },
  ],
  mechanisms: [
    "SCRAM-SHA-1"
  ]
});
