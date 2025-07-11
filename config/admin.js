module.exports = ({ env }) => ({
  auth: {
    secret: 'PBdH9GZKE62kiGW8Qp2RpA==',
  },
  apiToken: {
    salt: '5y7xFKj4rrZY+wBWlYAVVw==',
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
