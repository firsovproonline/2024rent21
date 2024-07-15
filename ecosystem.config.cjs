module.exports = {
    apps : [
      {
        name: "nuxt-dev",
        script: "npm",
        args: "run dev"
      },
      {
        name: "rent21pm2-prod",
        script: "npm",
        args: "run preview"
      }
    ]
  }
  