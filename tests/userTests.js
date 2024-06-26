const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app'); // Assuming app.js is the main entry point

chai.should();
chai.use(chaiHttp);

describe('Users API', () => {
    it('should GET all users', (done) => {
        chai.request(app)
            .get('/api/worko/user')
            .set('Authorization', 'your_test_jwt_token')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                done();
            });
    });

    // Add more tests as needed...
});
