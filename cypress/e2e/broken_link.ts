const sites = ['/en/work', '/en/projects']

describe("Included links", () => {
    it("check all links don't 404", () => {
            for (const p of sites) {
                cy.visit(p)
                cy.get('a').each(page => {
                    if (page.prop('href').startsWith('http')) {
                        cy.request(page.prop('href')).should('have.property','status',200)
                    }
                })
            }
        }
    )
})