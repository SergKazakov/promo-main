const FtpDeploy = require("ftp-deploy")
const ftpDeploy = new FtpDeploy()

const config = {
  username: "u0189072",
  password: "fD!Ld3Q8",
  host: "37.140.192.41",
  localRoot: `${__dirname}/../dist`,
  remoteRoot: "/httpdocs/embermvp.com",
}

ftpDeploy.deploy(config, err => {
  if (err) console.log(err)
  else console.log("finished")
})
