describe('Random Joke API', () => {
    const endpoint = 'https://api.chucknorris.io/jokes/random';
    let response;
    before(() => {
        cy.request(endpoint).then((res) => {
            response = res;
        })
    });
    it('Fetches a random joke', () => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('value').that.is.a('string');
        cy.log(JSON.stringify(response.body));
    });
    it('ensure API response time <500ms', () => {
        expect(response.duration).to.be.lessThan(500);
        cy.log("The response time is", JSON.stringify(response.duration)); //example of one way of showing result
        const responseTime = response.duration;
        cy.log(`The response time is ${responseTime} and we expect it to be less than 500`);//another example of one way of showing result
    });
});